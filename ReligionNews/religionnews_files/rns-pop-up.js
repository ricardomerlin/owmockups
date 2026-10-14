class NewsletterPopUp {
  constructor() {
    if (!window.rnsPopUp) return;
    this.postId = window.rnsPopUp.postId;
    this.frequencyNumber = window.rnsPopUp.frequencyNumber;
    this.frequencyTime = window.rnsPopUp.frequencyTime;
    this.html = window.rnsPopUp.html;
    this.additionalHtml = window.rnsPopUp.additionalHtml
      ? window.rnsPopUp.additionalHtml.replace(/endscripttag/g, "script")
      : "";
    this.hasSeenPopup = false;
    this.init();
  }

  popUpX = `<div class='rns-pop-up-x'><svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-x" fill="#555" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
        <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
    </svg></div>`;

  setNextTimeForPopup(numberOf, timeSpan) {
    let now = new Date();
    const num = parseInt(numberOf);
    if (timeSpan === "minutes") return now.setMinutes(now.getMinutes() + num);
    if (timeSpan === "hours") return now.setHours(now.getHours() + num);
    if (timeSpan === "days") return now.setDate(now.getDate() + num);
    if (timeSpan === "weeks") return now.setDate(now.getDate() + num * 7);
    if (timeSpan === "months") return now.setMonth(now.getMonth() + num);
  }

  createPopUpStylesheet() {
    return `
            <style>
                .rns-pop-up-wrapper {
                    font-family: var(--sans, sans-serif);
                }
                .rns-pop-up-x {
                    position: absolute; 
                    right: 10px; 
                    top: 10px; 
                    cursor: pointer;
                    z-index: 10002;
                    line-height: 1;
                }
                .rns-pop-up-background {
                    width: 100%; 
                    height: 100%; 
                    overflow-y: hidden; 
                    position: fixed; 
                    left: 0; 
                    top: 0; 
                    z-index: 10000; 
                    background: rgba(0, 0, 0, 0.5);
                }
                .rns-pop-up-container {
                    display: flex; 
                    justify-content: center; 
                    align-items: center; 
                    position: fixed; 
                    top: 15%; 
                    left: 48.1%;
                    transform: translateX(-50%);
                    width: 22rem; 
                    max-width: 90vw;
                    z-index: 10001;
                    bottom: auto; 
                }
                .pop-up-embed-form {
                    width: 100%;
                    max-height: 80vh;
                    overflow-y: auto;
                    background: #fff;
                    position: relative;
                }
                .inner-rns-pop-up {
                    background: none;
                    clear: left;
                    font-family: var(--sans, sans-serif);
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }
                .rns-pop-up-logo {
                    height: auto;
                    width: 100%; 
                    padding: 1.5rem; 
                    border-bottom: 1px solid #ddd; 
                    background: #fff; 
                    box-sizing: border-box;
                } 
                .inner-pop-up-content-container {
                    padding: 1.5rem;
                    margin: 0;
                    background: #fff;
                }
                .single .inner-pop-up-content-container .wp-caption {
                    margin-bottom: 0;
                }
                .single .inner-pop-up-content-container .wp-caption img {
                    max-width: 100%;
                    height: auto;
                }
                .inner-pop-up-content-container #mc_embed_signup {
                    font: 0.9rem var(--sans, sans-serif);
                    line-height: 1.4;
                }
                .inner-pop-up-content-container #mc_embed_signup .button {
                    background-color: var(--rnsblue, #0073aa);
                    margin: 0;
                    width: 100%;
                    display: block;
                    border-radius: 0;
                    box-sizing: border-box;
                    height: auto;
                    padding: 10px;
                    white-space: normal;
                    color: #fff !important;
                    line-height: 1.2;
                }
                .inner-pop-up-content-container #mc_embed_signup .button:hover {
                    background-color: var(--rnshover, #005177);
                }
                .inner-pop-up-content-container #mc_embed_signup form {
                    padding: 0;
                    margin: 0;
                    width: 100%;
                }
                .inner-pop-up-content-container img {
                    width: auto;
                    height: auto;
                    max-width: 100%;
                }
                .inner-pop-up-content-container a {
                    color: var(--rnsblue, #0073aa);
                }

                @media (max-width: 768px) {
                    .rns-pop-up-container {
                        top: 50%;
                        transform: translate(-50%, -50%);
                    }
                    .pop-up-embed-form {
                        max-height: 90vh;
                    }
                }
            </style>
        `;
  }

  // Randomly decide which pop-up to show (PopUp1 or PopUp2)
  getRandomPopUp() {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // PopUp 1
      return this.html;
    } else {
      // PopUp 2
      return this.additionalHtml;
    }
  }

  popUpHTML() {
    return `
        <div class='rns-pop-up-wrapper'>
            ${this.createPopUpStylesheet()}
            <div class='rns-pop-up-container'>
                <div class='pop-up-embed-form'>
                    ${this.popUpX}
                    <div class='inner-rns-pop-up'>
                        <div class='inner-pop-up-content-container'>
                            ${this.getRandomPopUp()} <!-- Random PopUp content -->
                        </div>
                    </div>
                </div>
            </div>
            <div class='rns-pop-up-background'>
            </div>
        </div>
        `;
  }

  popUpXListener() {
    const popUpX = document.querySelector(".rns-pop-up-x");
    if (!popUpX) return;
    popUpX.addEventListener("click", () => {
      const popUpWrapper = document.querySelector(".rns-pop-up-wrapper");
      if (!popUpWrapper) return;
      popUpWrapper.remove();
    });
  }

  getDateVariables() {
    return {
      nextTimeLocalStorage: localStorage.getItem("nextTimeForPopup"),
      currentDate: Date.parse(new Date()),
    };
  }

  renderPopup(el, nextTimeForPopup) {
    document.body.insertAdjacentHTML("beforeend", el.popUpHTML());
    localStorage.setItem("nextTimeForPopup", nextTimeForPopup);
    el.popUpXListener();
    el.popUpBackgroundListener();
    el.hasSeenPopup = true;
  }

  showPopupOnMouseout(e, el) {
    if (el.hasSeenPopup) return;
    const { nextTimeLocalStorage, currentDate } = el.getDateVariables();
    if (nextTimeLocalStorage > currentDate) return;
    const from = e.relatedTarget || e.toElement;

    if (e.offsetY <= 0 && (!from || from.nodeName === "HTML")) {
      const nextTimeForPopup = el.setNextTimeForPopup(
        el.frequencyNumber,
        el.frequencyTime
      );

      el.renderPopup(el, nextTimeForPopup);
    }
  }


  showPopupOnMobileScroll(el, scrollPercent = 30) {
    if (el.hasSeenPopup) return;

    const { nextTimeLocalStorage, currentDate } = el.getDateVariables();
    if (nextTimeLocalStorage > currentDate) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    if (!docHeight) return;

    const scrolled = (scrollTop / docHeight) * 100;

    if (scrolled >= scrollPercent) {
      const nextTimeForPopup = el.setNextTimeForPopup(
        el.frequencyNumber,
        el.frequencyTime
      );

      el.renderPopup(el, nextTimeForPopup);
      window.removeEventListener("scroll", el._mobileScrollHandler);
    }
  }


  popUpBackgroundListener() {
    const wrapper = document.querySelector(".rns-pop-up-wrapper");
    const innerPopup = document.querySelector(".inner-rns-pop-up");

    if (!wrapper || !innerPopup) return;

    // Close popup when clicking anywhere outside inner content
    wrapper.addEventListener("click", () => {
      wrapper.remove();
    });

    // Prevent clicks inside popup from closing it
    innerPopup.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  init() {
    const { nextTimeLocalStorage, currentDate } = this.getDateVariables();

    if (!nextTimeLocalStorage) {
      localStorage.setItem("nextTimeForPopup", currentDate);
    }

    const isMobile = window.innerWidth <= 768;

    if (nextTimeLocalStorage <= currentDate) {
      if (isMobile) {
        this._mobileScrollHandler = () =>
          this.showPopupOnMobileScroll(this, 30);

        window.addEventListener("scroll", this._mobileScrollHandler, {
          passive: true,
        });
      } else {
        document.addEventListener("mouseout", (e) =>
          this.showPopupOnMouseout(e, this)
        );
      }
    }
  }
}

window.rnsPopUpContent = new NewsletterPopUp();
