(function() {
    var _sf_async_config = window._sf_async_config = (window._sf_async_config || {});
    _sf_async_config.sections = chartbeat_config.sections;
    _sf_async_config.authors = chartbeat_config.authors;

    if (chartbeat_config.useAb) {
        _sf_async_config.flickerControl = false;
        _sf_async_config.articleBlockSelector = 'article,section.m-article-list-feature,li.m-article-list__item'
    }

    function loadChartbeat() {
        const e = document.createElement('script');
        const n = document.getElementsByTagName('script')[0];
        e.type = 'text/javascript';
        e.async = true;
        e.src = '//static.chartbeat.com/js/chartbeat.js';
        n.parentNode.insertBefore(e, n);
    }
    loadChartbeat();
})();