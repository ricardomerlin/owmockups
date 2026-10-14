function adjustPostContent() {
    let imageCaptions = [...jQuery(".wp-caption-text")];
    imageCaptions.forEach(function (caption) {
        jQuery(caption).removeClass(["wp-caption-text", "edd-enabled"]);
        jQuery(caption).addClass("image-caption");
    });
}

function showTooltip(element, tooltip) {
    const rect = element.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
    tooltip.style.top = `${rect.top + window.scrollY - rect.height}px`;
    tooltip.classList.add('show');
    setTimeout(() => {
        tooltip.classList.remove('show');
    }, 2000);
}

function showCustomShareDialog(url, title) {
    const shareUrl = encodeURIComponent(url);
    const shareTitle = encodeURIComponent(title);

    const mailtoLink = `mailto:?subject=${shareTitle}&body=${shareUrl}`;
    const smsLink = `sms:?body=${shareTitle} ${shareUrl}`;
    const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
    const twitterLink = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`;

    const customShareHTML = `
        <div id="customShareDialog">
            <div id="customShareDialogInner">
                <div class="title-4">Share this page</div>
                <div class="share-buttons">
                    <a href="" class="share-btn" id="copyShareLinkButton">
                        <img src="/wp-content/themes/newsmatic/assets/images/RNS-web-elements/Interface-icons/Link.svg" alt="Copy link">
                    </a>
                    <a class="share-btn" href="${mailtoLink}">
                        <img src="/wp-content/themes/newsmatic/assets/images/RNS-web-elements/Interface-icons/Mail.svg" alt="Email article">
                    </a>
                    <a class="share-btn" href="${smsLink}">
                        <img src="/wp-content/themes/newsmatic/assets/images/RNS-web-elements/Interface-icons/Comments.svg" alt="Text article">
                    </a>
                    <a class="share-btn" href="${facebookLink}" target="_blank">
                        <img src="/wp-content/themes/newsmatic/assets/images/RNS-web-elements/Social-icons/facebook.svg" alt="Share on Facebook">
                    </a>
                    <a class="share-btn" href="${twitterLink}" target="_blank">
                        <img src="/wp-content/themes/newsmatic/assets/images/RNS-web-elements/Social-icons/x.svg" alt="Share on X">
                    </a>
                </div>

                <button id="closeShareDialog">Close</button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', customShareHTML);

    document.getElementById('copyShareLinkButton').addEventListener('click', function (event) {
        event.preventDefault();
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard!');
            document.getElementById('customShareDialog').remove();
        }).catch(console.error);
    });

    document.getElementById('customShareDialog').addEventListener('click', function(event) {
        if (!document.getElementById('customShareDialogInner').contains(event.target)) {
            document.getElementById('customShareDialog').remove();
        }
    });

    document.getElementById('closeShareDialog').addEventListener('click', function () {
        document.getElementById('customShareDialog').remove();
    });
}

function initShareButtons() {
    var copyLinkButtonTop = document.getElementById('share-copy-link-top');
    var copyLinkButtonBottom = document.getElementById('share-copy-link-bottom');
    var tooltipTop = document.getElementById('tooltip-top');
    var tooltipBottom = document.getElementById('tooltip-bottom');


    [copyLinkButtonTop, copyLinkButtonBottom].forEach(function (btn, index) {
        if (btn) {
            var handleClickOrTouch = function (event) {
                event.preventDefault();
                var link = window.location.href;
                navigator.clipboard.writeText(link).then(function () {
                    var tooltip = index === 0 ? tooltipTop : tooltipBottom;
                    showTooltip(event.target, tooltip);
                }).catch(function (err) {
                    console.error('Failed to copy text: ', err);
                });
            };

            btn.addEventListener('click', handleClickOrTouch);
            btn.addEventListener('ontouchstart', handleClickOrTouch);
        }
    });

    var shareButtons = document.querySelectorAll('.share-btn:not(#share-copy-link-top):not(#share-copy-link-bottom)');

    shareButtons.forEach(function (button) {
        var handleClickOrTouch = function (event) {
            event.preventDefault();
            var platform = button.getAttribute('data-platform');
            var url = encodeURIComponent(window.location.href);
            var text = encodeURIComponent(document.title);


            var shareUrl = '';
            switch (platform) {
                case 'email':
                    shareUrl = 'mailto:?subject=' + text + '&body=' + url;
                    break;
                case 'facebook':
                    shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
                    break;
                case 'twitter':
                    shareUrl = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + text;
                    break;
                case 'reddit':
                    shareUrl = 'https://www.reddit.com/submit?url=' + url + '&title=' + text;
                    break;
                case 'flipboard':
                    shareUrl = 'https://share.flipboard.com/bookmarklet/popout?url=' + url + '&title=' + text;
                    break;
                case 'whatsapp':
                    shareUrl = 'https://wa.me/?text=' + text + '%20' + url;
                    break;
                default:
                    console.error('Unknown platform:', platform);
                    return;
            }


            if (platform === 'email') {
                window.location.href = shareUrl;
            } else {
                window.open(shareUrl, '_blank');
            }
        };

        button.addEventListener('click', handleClickOrTouch);
        button.addEventListener('ontouchstart', handleClickOrTouch);
    });

    var mobileShareButtons = Array.prototype.slice.call(document.getElementsByClassName('mobile-share-btn'));

    mobileShareButtons.forEach(function (el) {
        var handleClickOrTouch = function (event) {
            event.preventDefault();
            if (navigator.share) {
                var shareData = {
                    title: document.title,
                    url: window.location.href
                };

                navigator.share(shareData).then(function () {
                }).catch(console.error);
            } else {
                showCustomShareDialog(window.location.href, document.title);
            }
        };

        el.addEventListener('click', handleClickOrTouch);
        el.addEventListener('ontouchstart', handleClickOrTouch);
    });
}

function smoothScrollTo(target, duration) {
    let targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

function initArticle() {
    adjustPostContent();
    initShareButtons();

    document.getElementById('scroll-link').addEventListener('click', function (e) {
        e.preventDefault();
        let mobileComments = jQuery("#mobile-comments");
        let target = mobileComments.is(":visible") ?
            document.getElementById("mobile-comments") : document.getElementById("comments");
        smoothScrollTo(target, 1000);
    });
}

function adjustMobileButtonVisibility() {

    const shareContainers = document.querySelectorAll('.mobile-share');

    if (shareContainers.length > 0) {

        const firstInstance = shareContainers[0];
        const allButtonsFirst = firstInstance.querySelectorAll('.share-btn, .copy-link-btn, .mobile-share-btn');
        allButtonsFirst.forEach(btn => btn.style.display = 'none');
        const mobileShareButton = firstInstance.querySelector('.mobile-share-btn');
        if (mobileShareButton) {
            mobileShareButton.style.display = 'inline-block'; 
        }

        if (shareContainers.length > 1) {
            const secondInstance = shareContainers[1];
            const allButtonsSecond = secondInstance.querySelectorAll('.share-btn, .copy-link-btn');
            allButtonsSecond.forEach(btn => btn.style.display = 'none');


            const buttonsToShow = ['email', 'copy-link', 'facebook', 'twitter', 'flipboard'];
            buttonsToShow.forEach(platform => {
                let selector = platform === 'copy-link' ? '.copy-link-btn' : `.share-btn[data-platform="${platform}"]`;
                const button = secondInstance.querySelector(selector);
                if (button) {
                    button.style.display = 'inline-block'; 
                }
            });
        }
    }
}


function adjustDesktopButtonVisibility() {
    const shareContainers = document.querySelectorAll('.desktop-share');

    if (shareContainers.length > 0) {
        const firstInstance = shareContainers[0];
        const allButtonsFirst = firstInstance.querySelectorAll('.share-btn, .copy-link-btn');
        
        allButtonsFirst.forEach(btn => {
            const platform = btn.getAttribute('data-platform');
            if (btn.classList.contains('copy-link-btn') || 
                platform === 'email' || 
                platform === 'facebook' || 
                platform === 'twitter') {
                btn.style.display = 'inline-block';
            } else {
                btn.style.display = 'none';
            }
        });
    }
}

function removeSecondInstanceOfElement(selector) {
    // Select all elements based on the provided selector
    let elements = document.querySelectorAll(selector);

    // Check if there are more than one instance
    if (elements.length > 1) {
        // Remove the second instance
        elements[1].remove();
    }
}

removeSecondInstanceOfElement('.social-icons-container.footer');
// Get the current page URL
var currentPage = window.location.href;

// Check if the current page URL does not contain "religion-news-quiz"
if (!currentPage.includes('religion-news-quiz')) {
    // Call the function to adjust button visibility
    adjustMobileButtonVisibility();
    // Call the function to adjust the visibility
    adjustDesktopButtonVisibility();
}
