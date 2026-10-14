jQuery(document).ready(function($) {
    // Check URL for page parameter and update currentPage accordingly
    let urlParams   = new URLSearchParams(window.location.search);
    let currentPage = parseInt(urlParams.get('page')) || 1;
    $('#current-page-number').text(currentPage);
    
    if (currentPage > 1) {
        loadPage(currentPage);
    }

    $(document).on('click', '#pagination a', function(e) {
        e.preventDefault();

        let section    = $(e.target).closest('section');
        let authorId   = $('#author-articles').attr('data-author-id');
        let row        = $(section).find('#post-list > div').first();
        let catName    = row.attr('data-cat-name');
        let tagName    = row.attr('data-tag-name');
        let perPage    = 10;
        let totalPages = $('#pagination').attr('data-total-pages');

        const urlParams = new URLSearchParams(window.location.search);
        let searchQuery = urlParams.get('s') || ''; 

        if ($(e.target).hasClass('next') && currentPage < totalPages) {
            $(this).data('page', currentPage + 1);
        }
        if ($(e.target).hasClass('prev') && currentPage > 1) {
            $(this).data('page', currentPage - 1);
        }

        let page = $(this).data('page');

        const newUrl = window.location.pathname + '?' +
                       (searchQuery ? 's=' + encodeURIComponent(searchQuery) + '&' : '') +
                       (tagName    ? 'tag=' + encodeURIComponent(tagName)       + '&' : '') +
                       'page=' + page;
        window.history.pushState({page: page}, '', newUrl);

        let data = {
            action:        'load_more_posts',
            page:          page,
            category_name: catName,
            tag:           tagName,
            per_page:      perPage,
            nonce:         ajax_params.nonce,
            author:        authorId,
            search_query:  searchQuery 
        };

        if (searchQuery !== '') {
            data.category_name = '';
            data.author        = '';
            data.tag           = '';
        }

        $.ajax({
            url:     ajax_params.ajax_url,
            type:    'post',
            data:    data,
            success: function(response) {
                $('#post-list').html(response);
                currentPage = page;
                displayArrows(currentPage, totalPages);
                $('#current-page-number').text(currentPage);
            },
            error: function(xhr, status, error) {
                console.error('AJAX Error:', status, error);
            }
        });
    });

    window.onpopstate = function(e) {
        let params = new URLSearchParams(window.location.search);
        let page   = parseInt(params.get('page')) || 1;
        if (page !== currentPage) {
            loadPage(page);
        }
    };

    function loadPage(page) {
        let section    = $('#post-list').closest('section');
        let authorId   = $('#author-articles').attr('data-author-id');
        let row        = section.find('#post-list > div').first();
        let catName    = row.attr('data-cat-name');
        let tagName    = row.attr('data-tag-name');
        let perPage    = 10;
        let totalPages = $('#pagination').attr('data-total-pages');

        const urlParams  = new URLSearchParams(window.location.search);
        let searchQuery  = urlParams.get('s') || ''; 

        let data = {
            action:        'load_more_posts',
            page:          page,
            category_name: catName,
            tag:           tagName,
            per_page:      perPage,
            nonce:         ajax_params.nonce,
            author:        authorId,
            search_query:  searchQuery 
        };

        if (searchQuery !== '') {
            data.category_name = '';
            data.author        = '';
            data.tag           = '';
        }

        $.ajax({
            url:     ajax_params.ajax_url,
            type:    'post',
            data:    data,
            success: function(response) {
                $('#post-list').html(response);
                currentPage = page;
                displayArrows(currentPage, totalPages);
                $('#current-page-number').text(currentPage);
            },
            error: function(xhr, status, error) {
                console.error('AJAX Error:', status, error);
            }
        });
    }
});

function displayArrows(currentPage, totalPages) {
    const prevArrow = jQuery('#prev-page-arrow');
    const nextArrow = jQuery('#next-page-arrow');

    if (currentPage === 1) {
        prevArrow.hide();
        nextArrow.show();
    } else if (currentPage === totalPages) {
        prevArrow.show();
        nextArrow.hide();
    } else {
        prevArrow.show();
        nextArrow.show();
    }
}
