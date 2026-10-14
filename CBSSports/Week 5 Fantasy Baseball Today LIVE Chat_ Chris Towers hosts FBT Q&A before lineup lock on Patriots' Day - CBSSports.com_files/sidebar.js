(() => {
    class Sidebar extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.innerHTML = `
                <style>
                    :host {
                        display: block;
                    }
                    dialog {
                        all: unset;
                        background-color: var(--ow-dialog-bg-color);
                        border: none;
                        box-shadow: -5px 0px 10px -5px rgba(0, 0, 0, 0.1);
                        height: calc(100% - var(--header-height, 0));
                        max-width: 100%;
                        opacity: 0;
                        overflow: hidden;
                        pointer-events: none;
                        position: fixed;
                        right: 0;
                        top: var(--header-height, 0px);
                        transform: translateX(100%);
                        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
                        width: 100%;
                        z-index: 1000000000;
                    }
                    @media screen and (min-width: 560px) {
                        dialog {
                            max-width: 480px;
                        }
                    }
                    dialog[open] {
                        opacity: 1;
                        pointer-events: auto;
                        transform: translateX(0);
                    }
                    .SidebarContent {
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        overflow-y: auto;
                        padding: 1.25rem;
                    }
                    .SidebarCloseBtn {
                        align-self: flex-end;
                        background: none;
                        border: none;
                        cursor: pointer;
                        font-size: 2rem;
                        padding: 0;
                    }
                </style>
                <dialog>
                    <div class="SidebarContent">
                        <button class="SidebarCloseBtn">&times;</button>
                        <slot></slot>
                    </div>
                </dialog>
            `;

            this.dialog = this.shadowRoot.querySelector('dialog');
            this.closeButton = this.shadowRoot.querySelector('.SidebarCloseBtn');

            // Bind methods
            this.open = this.open.bind(this);
            this.close = this.close.bind(this);
            this.updateHeaderHeight = this.updateHeaderHeight.bind(this);
            this.transitionEndHandler = this.transitionEndHandler.bind(this);

            // Tracking
            this.userTracking = {
                userId: window && window.utag_data && window.utag_data.userId,
                userState: window && window.utag_data && window.utag_data.userState,
                userType: window && window.utag_data && window.utag_data.userType,
            };

            // Initialize bound event handlers
            this.boundEventHandlers = {
                messageClicked: this.handleMessageClicked.bind(this),
                upVoteClick: this.handleUpVoteClick.bind(this),
                downVoteClick: this.handleDownVoteClick.bind(this),
                shareType: this.handleShareType.bind(this),
                showMoreComments: this.handleShowMoreComments.bind(this),
            };

            // Initialize tracking utils
            this.trackingUtils = {
                safeTrackAction: (data) => {
                    if (window && window.om && typeof window.om.trackAction === 'function') {
                        try {
                            window.om.trackAction('openweb interaction', {
                                ...this.userTracking,
                                ...data,
                            });
                        } catch (error) {
                            console.warn('Tracking failed:', error);
                        }
                    }
                },
            };
        }

        transitionEndHandler() {
            if (!this.dialog.hasAttribute('open')) {
                this.dialog.close();
            }
        }

        connectedCallback() {
            this.headerSelector = this.getAttribute('header-selector');
            this.header = this.headerSelector && document.querySelector(this.headerSelector);
            this.gtaagSelector = this.getAttribute('gtaag-selector');
            this.gtaag = this.gtaagSelector && document.querySelector(this.gtaagSelector);
            this.moduleLocation = this.getAttribute('module-location');
            this.moduleCampaign = this.getAttribute('module-campaign');

            this.registerTrackingEvents();

            if (this.header) {
                this.resizeObserver = new ResizeObserver(this.updateHeaderHeight);
                this.resizeObserver.observe(document.body);
                this.updateHeaderHeight();
            }

            this.closeButton.addEventListener('click', this.close);

            // Hook into transitionend for smooth closing
            this.dialog.addEventListener('transitionend', this.transitionEndHandler);
        }

        disconnectedCallback() {
            if (this.header) {
                this.resizeObserver.disconnect();
            }

            this.dialog.removeEventListener('transitionend', this.transitionEndHandler);
            this.closeButton.removeEventListener('click', this.close);
            document.removeEventListener(
                'spot-im-current-user-sent-message-clicked',
                this.boundEventHandlers.messageClicked
            );
            document.removeEventListener('spot-im-user-up-vote-click', this.boundEventHandlers.upVoteClick);
            document.removeEventListener('spot-im-user-down-vote-click', this.boundEventHandlers.downVoteClick);
            document.removeEventListener('spot-im-share-type', this.boundEventHandlers.shareType);
            document.removeEventListener(
                'spot-im-show-more-comments-clicked',
                this.boundEventHandlers.showMoreComments
            );
        }

        updateHeaderHeight() {
            const globalNavHeight = this.header.clientHeight;
            const rect = this.header.getBoundingClientRect();
            const fromTop = rect.top + globalNavHeight;
            // Set custom property
            this.dialog.style.setProperty('--header-height', `${fromTop}px`);
        }

        open() {
            if (window && 'aviaVideoPlayer' in window) {
                window.aviaVideoPlayer.pause();
            }

            this.trackingUtils.safeTrackAction({
                ...this.userTracking,
                moduleAction: 'impression',
                moduleCampaign: this.moduleCampaign,
                moduleLocation: this.moduleLocation,
                moduleName: 'open web panel open',
            });

            this.dialog.show();
            requestAnimationFrame(() => this.dialog.setAttribute('open', ''));
        }

        close() {
            this.dialog.close();

            // tracking team wants both an impression and a click action
            window.om.trackAction('openweb interaction', {
                ...this.userTracking,
                moduleAction: 'impression',
                moduleCampaign: this.moduleCampaign,
                moduleLocation: this.moduleLocation,
                moduleName: 'open web panel close',
            });

            window.om.trackAction('openweb interaction', {
                ...this.userTracking,
                clickText: 'x',
                moduleAction: 'click',
                moduleCampaign: this.moduleCampaign,
                moduleLocation: 'open web panel',
                moduleName: 'close',
            });
        }

        registerTrackingEvents() {
            // Add event listeners using bound handlers
            document.addEventListener(
                'spot-im-current-user-sent-message-clicked',
                this.boundEventHandlers.messageClicked
            );
            document.addEventListener('spot-im-user-up-vote-click', this.boundEventHandlers.upVoteClick);
            document.addEventListener('spot-im-user-down-vote-click', this.boundEventHandlers.downVoteClick);
            document.addEventListener('spot-im-share-type', this.boundEventHandlers.shareType);
            document.addEventListener('spot-im-show-more-comments-clicked', this.boundEventHandlers.showMoreComments);
        }

        handleMessageClicked(event) {
            const moduleName = event.detail && event.detail.message_type === 'comment' ? 'comment' : 'reply';
            this.trackingUtils.safeTrackAction({
                clickText: 'send',
                moduleAction: 'click',
                moduleCampaign: this.moduleCampaign,
                moduleLocation: 'open web panel',
                moduleName,
            });
        }

        handleUpVoteClick() {
            this.trackingUtils.safeTrackAction({
                clickText: 'like',
                moduleAction: 'click',
                moduleCampaign: this.moduleCampaign,
                moduleLocation: 'open web panel',
                moduleName: 'like',
            });
        }

        handleDownVoteClick() {
            this.trackingUtils.safeTrackAction({
                clickText: 'dislike',
                moduleAction: 'click',
                moduleCampaign: this.moduleCampaign,
                moduleLocation: 'open web panel',
                moduleName: 'dislike',
            });
        }

        handleShareType() {
            this.trackingUtils.safeTrackAction({
                clickText: 'share',
                moduleAction: 'click',
                moduleCampaign: this.moduleCampaign,
                moduleLocation: 'open web panel',
                moduleName: 'share',
            });
        }

        handleShowMoreComments() {
            this.trackingUtils.safeTrackAction({
                clickText: 'show more comments',
                moduleAction: 'click',
                moduleCampaign: this.moduleCampaign,
                moduleLocation: 'open web panel',
                moduleName: 'show more comments',
            });
        }
    }

    customElements.define('ow-sidebar', Sidebar);
})();
