jQuery(document).ready(function() {
    "use strict"

    //Initializers
    newsmatic_init();
    navigationNewsmatic();
    carousel();
    newsletter_signups();
    faith_selector_init();
    popular_posts_init();
    podcast_player_init();
    footer_init();

    //Adjustments
    checkNewsletterImage();
});

function checkNewsletterImage() {
    const newsletterHeaderImage = jQuery('.newsletter-container.banner-image-placeholder');
    if (jQuery(newsletterHeaderImage).children().length === 0) {
        newsletterHeaderImage.addClass('default-no-image');
    }
}

function footer_init() {
    const menuTitleServices = [...jQuery('.navigation-menus ul#menu-footer-services li:first-of-type a')];
    const menuTitleContact = [...jQuery('.navigation-menus ul#menu-footer-contact-container li:first-of-type a')];
    menuTitleServices.forEach(title => { jQuery(title).removeAttr('href'); });
    menuTitleContact.forEach(title => { jQuery(title).removeAttr('href'); });

    const clonedElement = jQuery('.social-icons-container:first-of-type').clone();
    jQuery(clonedElement).addClass('footer');
    jQuery('.bottom-footer .social-icons-container').replaceWith(clonedElement);
}

function newsmatic_init() {
    const masthead = jQuery( "#masthead" );
    const body = jQuery('body');

    setTimeout(function() {
        jQuery('body .newsmatic_loading_box').hide();
    }, 3000);

    newsmaticObject.stt = false; //RNS specific
    var ajaxUrl = newsmaticObject.ajaxUrl, _wpnonce = newsmaticObject._wpnonce, sttOption = newsmaticObject.stt, query_vars = newsmaticObject.query_vars, paged = newsmaticObject.paged,  stickyHeader = newsmaticObject.stickey_header;

    var nrtl = false
    var ndir = "left"
    if (body.hasClass("rtl")) {
        nrtl = true;
        ndir = "right";
    };

    if (stickyHeader && window.innerWidth < 768) {
        const fixedHeaderHideElementFlag = jQuery(".fixed-header-hide");
        const fixed = jQuery(".main-header");
        jQuery(window).on('scroll', function() {
            let scroll = jQuery(window).scrollTop();
            if (jQuery(".IL_BASE").length) {
                jQuery(".main-header").addClass("below-ad");
            }

            if (scroll > 100) {
                fixedHeaderHideElementFlag.hide();
                fixed.addClass("main-header-fixed");
            } else {
                fixedHeaderHideElementFlag.show();
                fixed.removeClass("main-header-fixed");
            }
        });
    }

    // search form and sidebar toggle trigger
    masthead.on( "click", ".sidebar-toggle-trigger", function() {
        jQuery("body").toggleClass("no-scroll");
        jQuery(this).addClass('slideshow');
        jQuery(".sidebar-toggle").scrollTop(0);
    });

    masthead.on( "click", ".sidebar-toggle-trigger.slideshow, .sidebar-toggle .sidebar-toggle-close", function() {
        jQuery('.sidebar-toggle-trigger').removeClass('slideshow');
    });

    // search form
    masthead.on( "click", ".search-trigger", function() {
        jQuery(this).next().slideDown(200);
        jQuery(this).addClass('slideshow');
        jQuery('#masthead .search-wrap input[type="search"]').focus()
    });
    masthead.on( "click", ".search-trigger.slideshow", function() {
        jQuery(this).next().slideUp(200);
        jQuery(this).removeClass('slideshow');
    });

    // live search
    if( newsmaticObject.livesearch ) {
        var searchContainer = jQuery("#masthead .search-wrap")
        if( searchContainer.length > 0 ) {
            var searchFormContainer = searchContainer.find("form")
            searchContainer.on( 'change, keyup', 'input[type="search"]', function() {
                var searchKey = jQuery(this).val()
                if(searchKey) {
                    jQuery.ajax({
                        method: 'post',
                        url: ajaxUrl,
                        data: {
                            action: 'newsmatic_search_posts_content',
                            search_key : searchKey.trim(),
                            _wpnonce: _wpnonce
                        },
                        beforeSend: function() {
                            searchFormContainer.addClass( 'retrieving-posts' );
                            searchFormContainer.removeClass( 'results-loaded' )
                        },
                        success : function(res) {
                            var parsedRes = JSON.parse(res)
                            searchContainer.find(".search-results-wrap").remove()
                            searchFormContainer.after(parsedRes.posts)
                            searchFormContainer.removeClass( 'retrieving-posts' ).addClass( 'results-loaded' );
                        },
                        complete: function() {
                            // render search content here
                        }
                    })
                } else {
                    searchContainer.find(".search-results-wrap").remove()
                    searchFormContainer.removeClass( 'results-loaded' )
                }
            })
        }
    }

    newsmaticclosemodal( jQuery( ".search-wrap" ), function () {
        jQuery( ".search-wrap .search-trigger" ).removeClass( "slideshow" );
        jQuery( ".search-form-wrap" ).slideUp(200);
        jQuery("#masthead .search-wrap").find(".search-results-wrap").remove()
        jQuery("#masthead .search-wrap").removeClass( 'results-loaded' )
    }); // trigger search close
    newsmaticclosemodal( jQuery( ".sidebar-toggle-wrap" ), function () {
        body.removeClass('body_show_sidetoggle no-scroll');
        jQuery( ".sidebar-toggle-wrap .sidebar-toggle-trigger" ).removeClass( "slideshow" );
    }); // trigger htsidebar close

    // main banner slider events
    var bc = jQuery( "#main-banner-section" );
    if( bc.length ) {
        var bic = bc.find( ".main-banner-slider" )
        var bAuto = bic.data( "auto" )
        var bArrows = bic.data( "arrows" )
        bic.slick({
            dots: false,
            infinite: true,
            rtl: nrtl,
            arrows: bArrows,
            autoplay: false,
            nextArrow: `<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>`,
            prevArrow: `<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>`,
        });
    }

    // news carousel events
    var nc = jQuery( ".rns-section .news-carousel .news-carousel-post-wrap" );
    if( nc.length ) {
        nc.each(function() {
            var _this = jQuery(this)
            var ncDots= _this.data("dots") == '1'
            var ncLoop= _this.data("loop") == '1'
            var ncArrows= _this.data("arrows") == '1'
            var ncAuto  = _this.data("auto") == '1'
            var ncColumns  = _this.data("columns")
            _this.slick({
                dots: ncDots,
                infinite: ncLoop,
                arrows: ncArrows,
                autoplay: ncAuto,
                rtl: nrtl,
                slidesToShow: ncColumns,
                nextArrow: `<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>`,
                prevArrow: `<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>`,
                responsive: [
                    {
                        breakpoint: 1100,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 1,
                        },
                    }
                ]
            });
        })
    }

    // Filter posts
    jQuery( ".rns-section .news-filter" ).each(function() {
        var jQueryscope = jQuery(this), jQueryscopeOptions = jQueryscope.data("args"), newTabs = jQueryscope.find( ".filter-tab-wrapper" ), newTabsContent = jQueryscope.find( ".filter-tab-content-wrapper" );
        newTabs.on( "click", ".tab-title", function() {
            var a = jQuery(this), aT = a.data("tab")
            a.addClass( "isActive" ).siblings().removeClass( "isActive" );
            if( newTabsContent.find( ".tab-content.content-" + aT ).length < 1 ) {
                jQueryscopeOptions.category_name = aT
                jQuery.ajax({
                    method: 'get',
                    url: ajaxUrl,
                    data: {
                        action: 'newsmatic_filter_posts_load_tab_content',
                        options : JSON.stringify( jQueryscopeOptions ),
                        _wpnonce: _wpnonce
                    },
                    beforeSend: function() {
                        jQueryscope.addClass( 'retrieving-posts' );
                    },
                    success : function(res) {
                        var parsedRes = JSON.parse(res)
                        if( parsedRes.loaded ) {
                            newTabsContent.append(parsedRes.posts)
                            jQueryscope.removeClass( 'retrieving-posts' );
                        }
                    },
                    complete: function() {
                        newTabsContent.find( ".tab-content.content-" + aT ).show().siblings().hide()
                    }
                })
            } else {
                newTabsContent.find( ".tab-content.content-" + aT ).show().siblings().hide()
            }
        })
    })

    // tabbed posts
    var tabpWidgets = jQuery( ".newsmatic-tabbed-widget-tabs-wrap" )
    tabpWidgets.each(function() {
        var _this = jQuery(this), parentWidgetContainerId = _this.parents( ".widget.widget_newsmatic_tabbed_posts_widget" ).attr( "id" ), parentWidgetContainer
        if( typeof parentWidgetContainerId != 'undefined' ) {
            parentWidgetContainer = jQuery( "#" + parentWidgetContainerId )
            var tabpWidget = parentWidgetContainer.find( ".newsmatic-tabbed-widget-tabs-wrap" );
        } else {
            var tabpWidget = _this;
        }
        if( tabpWidget.length > 0 ) {
            tabpWidget.on( "click", ".tabbed-widget-tabs li.tabbed-widget", function() {
                var _this = jQuery(this), tabItem = _this.attr( "tab-item" );
                _this.addClass( "active" ).siblings().removeClass( "active" );
                tabpWidget.find( '.widget-tabs-content div[tab-content="' + tabItem + '"]' ).addClass( "active" ).siblings().removeClass( "active" );
            })
        }
    })

    // category archive hide featured post in list
    var featuredPost = jQuery( ".archive.category .featured-post.is-sticky" )
    if( featuredPost.length > 0 ) {
        var postHide = "#post-" + featuredPost.data("id")
        jQuery(postHide).addClass( "sticky-hide" );
    }

    let latestPosts = jQuery('.latest-five-articles-article');
    if (latestPosts.length % 2 !== 0) {
        latestPosts[latestPosts.length-1].classList.add('mobile-hide');
        latestPosts[latestPosts.length-1].classList.add('tablet-hide');
    }
}

function newsmaticclosemodal( elm, callback ) {
    jQuery(document).mouseup(function (e) {
        var container = jQuery(elm);
        if (!container.is(e.target) && container.has(e.target).length === 0) callback();
    });
}
