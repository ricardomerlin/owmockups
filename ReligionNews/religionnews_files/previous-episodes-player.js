function togglePlayPause(playerIndex) {
    if (jQuery('.podcast-player').length > 0) {
        const playerSelector = `.podcast-entry-${playerIndex}`;
        const audio = jQuery(`${playerSelector} audio`).get(0); 
        const playIcon = jQuery(`${playerSelector} .play-icon`).get(0); 
        const pauseIcon = jQuery(`${playerSelector} .pause-icon`).get(0); 

        if (!audio || !playIcon || !pauseIcon) {
            console.error(`Audio player ${playerIndex}: Audio, Play Icon, or Pause Icon not found.`);
            return;
        }

        const isPlaying = !audio.paused && !audio.ended;

        audio[isPlaying ? 'pause' : 'play']();
        playIcon.style.display = isPlaying ? 'inline-block' : 'none';
        pauseIcon.style.display = isPlaying ? 'none' : 'inline-block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const players = document.querySelectorAll('[class^="podcast-entry-"] audio');
    players.forEach((audio, index) => {
        const progressBar = document.querySelector(`.podcast-entry-${index + 1} .podcast-progress-container progress`);
        const playButton = document.querySelector(`.podcast-entry-${index + 1} .play-episode-button`);
        const playIcon = document.querySelector(`.podcast-entry-${index + 1} .play-icon`);
        const pauseIcon = document.querySelector(`.podcast-entry-${index + 1} .pause-icon`);

        if (!audio || !progressBar || !playButton || !playIcon || !pauseIcon) {
            console.error(`Audio player ${index + 1}: Required elements not found.`);
            return;
        }

        progressBar.addEventListener('click', function(e) {
            const rect = progressBar.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const width = rect.width;
            const seekPercentage = (x / width) * 100;

            progressBar.value = seekPercentage;

            if (audio.duration && isFinite(audio.duration)) {
                audio.currentTime = audio.duration * (seekPercentage / 100);
            }
        });

        audio.addEventListener('ended', function() {
            progressBar.value = 0;
            playIcon.style.display = 'inline-block';
            pauseIcon.style.display = 'none';
        });
    });
});
