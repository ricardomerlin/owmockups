const audio = jQuery('audio')[0];
console.log('audio:', audio);

const previewAudio = jQuery('.latest-ep-audio')[0] || jQuery('.podcast-previewer')[0];
console.log('previewAudio:', previewAudio);

const playIcon = document.querySelector('.play-icon');
console.log('playIcon:', playIcon);

const pauseIcon = document.querySelector('.pause-icon');
console.log('pauseIcon:', pauseIcon);

const progressBar_latest = document.querySelector('.podcast-progress');
console.log('progressBar_latest:', progressBar_latest);

const progressBar_preview = document.querySelector('.podcast-progress');
console.log('progressBar_preview:', progressBar_preview);

const players = jQuery('.podcast-player');
console.log('players:', players);

let previewStartTime = 0;
console.log('previewStartTime:', previewStartTime);

const durationLimit = 30;
console.log('durationLimit:', durationLimit);

const fadeOutDuration = 5;
console.log('fadeOutDuration:', fadeOutDuration);

let pausedTime = 0;
console.log('pausedTime:', pausedTime);

function togglePlayPause_latest() {
    console.log('togglePlayPause_latest called');
    console.log('players.length:', players.length);

    if (players.length > 0) {
        const isPlaying = !audio.paused && !audio.ended;
        console.log('isPlaying:', isPlaying);

        if (isPlaying) {
            audio.pause();
            jQuery(playIcon).show(); 
            jQuery(pauseIcon).hide();
        } else {
            audio.play();
            jQuery(playIcon).hide();
            jQuery(pauseIcon).show();
        }
    }
}

function togglePlayPause_preview() {
    if (!previewAudio) {
        console.error('previewAudio is undefined. Cannot play preview.');
        return;
    }

    console.log('togglePlayPause_preview called');
    console.log('previewAudio.paused:', previewAudio.paused, 'previewAudio.ended:', previewAudio.ended);
    console.log('pausedTime before toggle:', pausedTime);

    if (previewAudio.paused || previewAudio.ended) {
        console.log('Audio is paused or ended');
        if (pausedTime !== 0 && pausedTime < durationLimit) {
            console.log('Resuming from pausedTime:', pausedTime);
            previewAudio.currentTime = pausedTime;
        } else {
            console.log('Starting from previewStartTime:', previewStartTime);
            previewAudio.currentTime = previewStartTime;
        }
        previewAudio.volume = 1;
        previewAudio.play();
        console.log('Audio play() called');

        console.log('playIcon before hide:', playIcon);
        console.log('pauseIcon before show:', pauseIcon);
        jQuery(playIcon).hide();
        jQuery(pauseIcon).show();
        console.log('Icons toggled: play hidden, pause shown');

        setTimeout(() => {
            console.log('Calling fadeOutAudio after timeout');
            fadeOutAudio(previewAudio, fadeOutDuration);
        }, (durationLimit - fadeOutDuration) * 1050);
    } else {
        pausedTime = previewAudio.currentTime; 
        console.log('Audio was playing. Pausing at:', pausedTime);
        previewAudio.pause();
        
        console.log('playIcon before show:', playIcon);
        console.log('pauseIcon before hide:', pauseIcon);
        jQuery(playIcon).show();
        jQuery(pauseIcon).hide();
        console.log('Icons toggled: play shown, pause hidden');
    }
}

function fadeOutAudio(audioElement, fadeOutDuration) {
    console.log('fadeOutAudio called with fadeOutDuration:', fadeOutDuration);
    const fadeOutInterval = 100; 
    const fadeOutStep = audioElement.volume / (fadeOutDuration * 1000 / fadeOutInterval);
    console.log('fadeOutStep:', fadeOutStep);

    const fadeOut = setInterval(() => {
        console.log('audioElement.volume before step:', audioElement.volume);

        if (audioElement.volume - fadeOutStep > 0) {
            audioElement.volume -= fadeOutStep;
        } else {
            audioElement.volume = 0;
            audioElement.pause();
            clearInterval(fadeOut);
            console.log('audioElement faded out and paused');
        }
        jQuery(playIcon).show();
        jQuery(pauseIcon).hide();
        console.log('audioElement.volume after step:', audioElement.volume);
    }, fadeOutInterval);
}

function podcast_player_init() {
    console.log('podcast_player_init called');
    console.log('players.length:', players.length);

    if (players.length > 0) {
        setTimeout(function() {
            const progressBarElement = progressBar_latest || progressBar_preview;
            const audioElement = audio;

            console.log('progressBarElement:', progressBarElement);
            console.log('audioElement:', audioElement);

            audioElement.addEventListener('loadedmetadata', function() {
                const audioDuration = audioElement.duration;
                console.log('audioDuration:', audioDuration);

                progressBarElement.value = 0;

                audioElement.addEventListener('timeupdate', function() {
                    if (audioDuration && isFinite(audioDuration) && audioElement.currentTime >= 0) {
                        const progressValue = (audioElement.currentTime / audioDuration) * 100;
                        progressBarElement.value = progressValue;
                        console.log('progressValue updated:', progressValue);
                    }
                });

                progressBarElement.addEventListener('input', function() {
                    if (audioDuration && isFinite(audioDuration)) {
                        audioElement.currentTime = audioDuration * (progressBarElement.value / 100);
                        console.log('audioElement.currentTime updated from input:', audioElement.currentTime);
                    }
                });

                progressBarElement.addEventListener('click', function(e) {
                    const rect = progressBarElement.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const width = rect.width;
                    const seekPercentage = (x / width) * 100;

                    progressBarElement.value = seekPercentage;

                    if (audioDuration && isFinite(audioDuration)) {
                        audioElement.currentTime = audioDuration * (seekPercentage / 100);
                        console.log('audioElement.currentTime updated from click:', audioElement.currentTime);
                    }
                });

                audioElement.addEventListener('ended', function() {
                    progressBarElement.value = 100; 
                    console.log('audioElement ended, progressBarElement.value set to 100');
                });
            });
        }, 1000);
    } else {
        console.log('No players found');
    }
}

jQuery(document).ready(function() {
    podcast_player_init();
});
