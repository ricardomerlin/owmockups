function identifierVariables() {
    if (localStorage.getItem("readArticles") === null) {
        localStorage.setItem("readArticles", "");
    }
    return {
        readArticles: localStorage.getItem('readArticles'),
        popularPostElements: [...jQuery(".popular-post-table-row.popular-post-image-display")],
        overallPopularPostElements: [...jQuery(".popular-post-table-row:not(.popular-post-image-display)")],
        progressBar: document.getElementById("progress-bar"),
        progressText: document.getElementById("progress-text")
    };
}

function popular_posts_init() {
    let variables = identifierVariables();

    const combinedElements = variables.popularPostElements.concat(variables.overallPopularPostElements);
    if (combinedElements.length > 0) {
        combinedElements.forEach(function(el) {
            el.addEventListener("auxclick", function() {
                setTimeout(function() {
                    const postId = el.getAttribute("data-post-id");
                    if (!variables.readArticles.includes(postId)) {
                        string.concat(variables.readArticles, ",", postId);
                        localStorage.setItem("readArticles", variables.readArticles);
                    }
                }, 100);
            });
        });
        updateReadingProgress(variables.overallPopularPostElements);
        if (variables.popularPostElements.length > 0) {
            updateReadingProgress(variables.popularPostElements);
        }
    }
}

function updateReadingProgress(elements) {
    let variables = identifierVariables();

    let popularArticlesRead = [];

    if (localStorage.getItem("readArticles") === null) {
        localStorage.setItem("readArticles", "");
    }

    for (let element of elements) {
        let val = jQuery(element).attr("data-post-id");
        if (localStorage.getItem("readArticles").indexOf(val) !== -1) {
            if (popularArticlesRead.indexOf(val) === -1) {
                popularArticlesRead.push(val);
            }
        }
        if (variables.overallPopularPostElements.length > 0) {
            variables.overallPopularPostElements.forEach(function(el) {
                if (el instanceof HTMLElement) {
                    let postId = jQuery(el).attr("data-post-id");
                    if (popularArticlesRead.includes(postId)) {
                        jQuery(el).addClass('article-read');
                    }
                }
            });
        }
    }

    if (elements[0].closest(".widget").querySelector(".progress-bar")) {
        const readCount = popularArticlesRead.length;
        const totalPosts = elements.length;
        const progressPercent = (readCount / totalPosts) * 100;
        variables.progressBar.style.width = progressPercent + "%";
        variables.progressText.textContent = `You've read ${readCount} of ${totalPosts} of today's most popular stories`;
    }
}