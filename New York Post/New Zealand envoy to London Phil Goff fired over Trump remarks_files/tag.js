window.addEventListener("load", function() {
    // Exit early if Sailthru was blocked by an ad-blocker
    if(!window.Sailthru) return console.warn("Sailthru onsite JS failed to load.");

    console.info("Sailthru onsite JS is loaded. Initializing Sailthru...");

    const customHandler = () => {
        Sailthru.init({
            customerId: tag.options.customerId,
            isCustom: true,
            autoTrackPageview: tag.options.autoTrackPageview,
            useStoredTags: tag.options.useStoredTags,
            excludeContent: tag.options.excludeContent,
        });
    }

    if (tag.isCustom) {
        if (docment.readyState === 'loading') {
            document.addEventListener("DOMContentLoaded", customHandler);
        } else {
            customHandler();
        }
    } else {
        Sailthru.init({
            customerId: tag.options.customerId
        });
    }
});
