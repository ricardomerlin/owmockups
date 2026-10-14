function carousel() {
    var nrtl = false;
    var ndir = "left";
    if (jQuery('body').hasClass("rtl")) {
        nrtl = true;
        ndir = "right";
    }

    var cpWidgets = jQuery('.newsmatic-widget-carousel-posts');
    jQuery('#carousel-content-slider').ready(() => {
        cpWidgets.each(function () {
            var _this = jQuery(this),
                parentWidgetContainerId = _this.parents('.widget.widget_newsmatic_carousel_widget').attr('id'),
                parentWidgetContainer;
            var cpWidget;
            if (typeof parentWidgetContainerId != 'undefined') {
                parentWidgetContainer = jQuery('#' + parentWidgetContainerId);
                cpWidget = parentWidgetContainer.find('.carousel-posts-wrap');
            } else {
                cpWidget = _this;
            }
            if (cpWidget.length > 0) {
                let ppWidgetAuto = cpWidget.data('auto');
                let ppWidgetArrows = cpWidget.data('arrows');
                let ppWidgetLoop = cpWidget.data('loop');
                let ppWidgetType = cpWidget.data('type');

                let ppWidgetDotsAppendString = "#" + cpWidget.data('append-dots-to-id');
                let ppWidgetDotsAppend = jQuery(ppWidgetDotsAppendString);

                switch (ppWidgetType) {
                    case 'post':
                        cpWidget.slick({
                            dots: true,
                            rtl: nrtl,
                            infinite: ppWidgetLoop,
                            arrows: ppWidgetArrows,
                            autoplay: ppWidgetAuto,
                            autoplaySpeed: 20000,
                            appendDots: ppWidgetDotsAppend
                        });
                        break;
                    case 'photos':
                        cpWidget.slick({
                            dots: true,
                            infinite: ppWidgetLoop,
                            rtl: nrtl,
                            arrows: ppWidgetArrows,
                            autoplay: ppWidgetAuto,
                            autoplaySpeed: 10000,
                            nextArrow: '<div class="next-arrow mobile-hide"><button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button></div>',
                            prevArrow: '<div class="prev-arrow mobile-hide"><button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button></div>',
                            appendArrows: jQuery('#carousel-content-slider'),
                            appendDots: jQuery('#widget-carousel-slider')
                        });
                        break;
                    default:
                        break;
                }
            }
        });
    });
}