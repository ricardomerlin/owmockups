let faithOptions = Array.from(document.getElementsByClassName('faith-section-headline'));

function faith_selector_init() {
    if (faithOptions.length > 0) {
        let childCategories = [];
        faithOptions.forEach(function(faith) {
            let faithId = faith.getAttribute('data-cat-id');
            let faithName = faith.getAttribute('data-cat-name');
            let slug = faith.getAttribute('data-cat-slug');
            let isChildCategory = faith.getAttribute('data-cat-is-child');
            let parentId = faith.getAttribute('data-cat-parent-id');

            if (isChildCategory) {
                faith.classList.add('child-category');
                childCategories.push(faithId);
                if (childCategories.find(value => value === parentId)) {
                    faith.classList.add('grandchild-category');
                }
            }

            faith.addEventListener('click', function(e) {
                jQuery('.faith-section-headline').css('font-weight', 400);
                jQuery(e.target).css('font-weight', 600);
                jQuery('.faith-section-headline').css('text-decoration', 'none');
                jQuery(e.target).css('text-decoration', 'underline');
                getFaithSection(faith.button, faithId, faithName, slug, faithName);
            });
        });

        const allFaithsButton = document.getElementById('Faiths-headline');
        if (allFaithsButton) {
            allFaithsButton.innerHTML = 'All Faiths';
            allFaithsButton.click();
        }
    }
}

const loader = `
  <div style="padding: 3rem 0; margin: auto; display: flex; justify-content: center;">
    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 50 50">
        <path fill="var(--rnsblue)" d="M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z">
            <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.75s" repeatCount="indefinite"/>
        </path>
    </svg>
  </div>
  `;

function getFaithSection(button_name, faith_id, faith_name, slug, section_name) {
    const faithSection = document.querySelector('.faith-section-container');
    faithSection.innerHTML = loader;

    fetch(`/wp-json/wp/v2/posts?categories=${faith_id}`)
        .then(res => res.json())
        .then(data => {
            const faithSectContainer = createFaithSectionContainer(faith_name, slug, section_name);
            const innerFaithContainer = faithSectContainer.querySelector(".faith-section-inner");
            const readMoreTag = innerFaithContainer.querySelector(".faith-cat-read-more-a-tag");

            if (data.length > 4) { data = data.slice(0, 4); } // Show up to 4 articles

            const postPromises = data.map(item => createFaithPost(item, section_name, slug));

            Promise.all(postPromises)
                .then(posts => {
                    posts.forEach(post => {
                        if (post.querySelector('.lazy-load') !== null) {
                            post.querySelector('.lazy-load').style.opacity = '0';
                            post.querySelector('.lazy-load').addEventListener('load', function() {
                                let opacity = 0;
                                const changeOpacity = setInterval(function () {
                                    if (opacity >= 100) {
                                        post.style.opacity = 1;
                                        clearInterval(changeOpacity);
                                    } else {
                                        opacity += 5;
                                        post.querySelector('.lazy-load').style.opacity = (opacity / 100).toString();
                                    }
                                }, 100);
                            });
                        }
                        innerFaithContainer.insertBefore(post, readMoreTag);
                    });

                    // Hide the loader and show the content
                    faithSection.innerHTML = '';
                    faithSection.appendChild(faithSectContainer);
                });
        })
        .catch(err => console.log(err));
}

function createFaithSectionContainer(faith_name, slug, section_name) {
    const container = document.createElement('div');
    container.classList.add(`${slug}-container`, 'faith-section-container');

    container.innerHTML = `
        <div class="${slug}-section faith-section-inner">
            <a class="faith-cat-read-more-a-tag" href="/category/${slug}">
                <div class="faith-cat-read-more">
                    <span>More Stories on ${faith_name}  </span>
                    <span class="read-more-arrow">&#8594;</span>
                </div>
            </a>
        </div>`;

    return container;
}

function createFaithPost(post, section_link) {
    return new Promise((resolve) => {
        const postElement = document.createElement('div');
        postElement.setAttribute('class', 'the-recent-post');
        let authorData;  
        fetch(`/wp-json/wp/v2/users/${post.author}`)
            .then(res => res.json())
            .then(data => {
                authorData = data;  
                const mainCategoryId = post.categories[0];
                return fetch(`/wp-json/wp/v2/categories/${mainCategoryId}`);
            })
            .then(res => res.json())
            .then(mainCategory => {
                const mainCategoryName = mainCategory.name; 

                postElement.innerHTML = `
                <div class="title-author-excerpt">
                    <div class="eyebrow-1">
                        <a href="${section_link}">${mainCategoryName}</a>
                    </div>
                    <a href="${post.link}" rel="bookmark">
                        <div class="entry-title headline-6">${post.title.rendered}</div>
                        <div class="byline-1">${authorData.name}</div> 
                    </a>
                </div>`;
                
                resolve(postElement);
            });
    });
}
