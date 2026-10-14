function TheButterflyReporterPlugin() {
  const currentVersion = "2.0.0";
  // that's a constructor in JS
  this.isOpened = false;
  this.isListeningToEscapeKeyPress = false;
  this.isEmbeddedInWix = false;
  this.extraParams = "";
  this.specificVersion;
  this.resetScale;
  this.stubbedLanguageCode;

  this.toggleButterflyReporter = function (
    apiKey,
    forcedCountryCode,
    forcedLanguageCode,
    shouldCloseOnFocusOut
  ) {
    if (this.isOpened) {
      this.closeButterflyReporter();
    } else {
      this.openButterflyReporter(
        apiKey,
        forcedCountryCode,
        this.stubbedLanguageCode || forcedLanguageCode,
        shouldCloseOnFocusOut
      );
    }
  };

  this.isMobilePortrait = function () {
    return window.innerHeight / window.innerWidth > 1;
  };

  this.openButterflyReporter = function (
    apiKey,
    overrideCountryCode,
    overrideLanguageCode,
    shouldCloseOnFocusOut
  ) {
    var userLanguage =
      window.navigator.userLanguage || window.navigator.language;

    var components = userLanguage.split("-");
    var languageCode = "en"; // default
    if (
      components.length > 0 &&
      components[0].length &&
      components[0].length == 2
    ) {
      languageCode = components[0];
    }

    if (overrideLanguageCode) {
      languageCode = overrideLanguageCode;
    }

    var iframe = document.createElement("iframe");
    // iframe.sandbox = "allow-scripts allow-same-origin";

    let iframeSource =
      "https://butterfly-button.web.app/" + (this.specificVersion || "reporter") + "/?language=" +
      languageCode +
      "&is-embedded-via-website=1" +
      "&is-embedded-via-wix=" +
      (this.isEmbeddedInWix ? "1" : "0") +
      `&web-plugin-version=${currentVersion}` +
      (this.extraParams || "") +
      "&api_key=" +
      apiKey +
      "&override_country=" +
      overrideCountryCode || "-";

    this.extraParams = "";
    this.stubbedLanguageCode = "invalid";
    var defaultIndex = Number.MAX_SAFE_INTEGER;
    iframe.id = "the-butterfly-reporter-iframe";

    iframe.style["border-style"] = "outset";
    iframe.style.position = "relative";
    iframe.style.display = "inline-block";
    iframe.style.width = "97%";
    iframe.style["max-width"] = "600px";
    iframe.style.height = "97%";
    iframe.style.margin = "0px";
    iframe.style.top = "10px";
    iframe.style.background = "#fff";

    var bfBackground = document.createElement("div");
    bfBackground.style.position = "relative";
    bfBackground.style.display = "inline-block";
    bfBackground.style["border-style"] = "outset";
    bfBackground.style.width = "95%";
    bfBackground.style.height = "95%";
    bfBackground.style.margin = "0px";
    bfBackground.style.top = "10px";
    bfBackground.style.background = "#fff";

    var dismissingBarrier = document.createElement("div");
    dismissingBarrier.style.position = "fixed";
    dismissingBarrier.style.display = "block";
    dismissingBarrier.style.width = "100%";
    dismissingBarrier.style.height = "100%";
    dismissingBarrier.style.top = "0px";
    dismissingBarrier.style.left = "0px";
    dismissingBarrier.style.bottom = "0px";
    //dismissingBarrier.style.cursor = "pointer";
    dismissingBarrier.style["background-color"] = "rgba(0.7, 0.7, 0.7, 0.9)";
    dismissingBarrier.style["z-index"] = defaultIndex;
    dismissingBarrier.style["text-align"] = "center";
    dismissingBarrier.style.direction = "ltr";

    if (this.resetScale) {
      iframe.style.transform = "scale(1, 1)";
    }

    dismissingBarrier.id = "butterfly-reporter-overlay";
    dismissingBarrier.onclick = function () {
      //bf_ReporterPlugin.closeButterflyReporter();
    };

    document.body.appendChild(dismissingBarrier);

    var closeButton = document.createElement("img");
    closeButton.id = "the-butterfly-close-button";
    closeButton.style.width = "40px";
    closeButton.style.height = "40px";
    closeButton.style.display = "block";
    closeButton.style.top = "0px";
    closeButton.style.cursor = "pointer";
    closeButton.style.position = "relative";
    closeButton.style.right = "25px";


    var closeButtonContainer = document.createElement("div");
    closeButtonContainer.style.width = "50px";
    closeButtonContainer.style.height = "50px";
    // closeButtonContainer.style.display = "block";
    closeButtonContainer.style.top = "0px";
    closeButtonContainer.style.position = "relative";
    //    closeButtonContainer.style.right = "30px";
    closeButtonContainer.onclick = function () {
      bf_ReporterPlugin.closeButterflyReporter();
    };

    closeButtonContainer.appendChild(closeButton);

    var closeButtonPlacement = document.createElement("div");
    closeButtonPlacement.style = iframe.style;
    closeButtonPlacement.id = "placement";
    closeButtonPlacement.style.top = "0px";
    // closeButtonPlacement.style.height = "50px";
    closeButtonPlacement.style.display = "inline-block";
    // closeButtonPlacement.style.width = "100%";
    closeButtonPlacement.style["max-width"] = "600px";
    closeButtonPlacement.style.position = "fixed";
    closeButtonPlacement.appendChild(closeButtonContainer);


    closeButton.src = "https://butterfly-button.web.app/img/close-button.png";
    closeButton.alt = "close Butterfly reporter";
    closeButton.onclick = function () {
      bf_ReporterPlugin.closeButterflyReporter();
    };
    if (!this.isListeningToEscapeKeyPress) {
      this.isListeningToEscapeKeyPress = true;
      document.addEventListener("keyup", (e) => {
        if (
          e.key === "Escape" &&
          bf_ReporterPlugin &&
          bf_ReporterPlugin.isOpened &&
          document.visibilityState == "visible"
        ) {
          bf_ReporterPlugin.closeButterflyReporter();
        }
      });
    }

    //document.body.addEventListener("keypress", (e) => {}, { once: true });
    dismissingBarrier.appendChild(iframe);
    dismissingBarrier.appendChild(closeButtonPlacement);

    if (shouldCloseOnFocusOut === 1 || shouldCloseOnFocusOut === true) {
      document.addEventListener(
        "visibilitychange",
        (event) => {
          if (
            bf_ReporterPlugin &&
            bf_ReporterPlugin.isOpened &&
            document.visibilityState != "visible"
          ) {
            bf_ReporterPlugin.closeButterflyReporter();
          }
        },
        { once: true }
      );
    }

    this.isOpened = true;

    setTimeout(() => {
      function loadContent(url) {
        fetch(url)
          .then(response => response.text())
          .then(data => {
            let domain = url.substring(0, url.lastIndexOf('/') + 1);
            var updatedData = data.replaceAll("<head>", "<head>\n" + '<base href="' + domain + '"></base>');
            updatedData = updatedData.replaceAll("<head>", "<head>\n" + '<script>let bf_params="' + url + '"</script>');
            const container = document.getElementById('the-butterfly-reporter-iframe');
            bf_reporterState.originalContent = updatedData;

            var scriptTag = container.contentDocument.createElement('script');
            scriptTag.type = 'text/javascript';
            scriptTag.text = "var bf_reporterState = `" + `"${updatedData}"` + "`";
            container.contentDocument.body.appendChild(scriptTag);

            if (container.contentDocument == null) {
              bf_ReporterPlugin.closeButterflyReporter();
            } else {
              container.contentDocument.open();
              container.contentDocument.write(updatedData);
              container.contentDocument.close();
            }
          })
          .catch(error => {
            console.error('Error loading content:', error);
            // Fallback
            iframe.setAttribute("src", iframeSource);
          });
      }

      loadContent(iframeSource);
    }, 100);
  };

  this.closeButterflyReporter = function () {
    var iframe = document.querySelector("#the-butterfly-reporter-iframe");
    if (iframe) {
      iframe.parentNode.removeChild(iframe);
    }

    var overlay = document.querySelector("#butterfly-reporter-overlay");
    if (overlay) {
      overlay.parentNode.removeChild(overlay);
    }

    var closeButton = document.querySelector("#the-butterfly-close-button");
    if (closeButton) {
      closeButton.parentNode.removeChild(closeButton);
    }

    this.isOpened = false;
  };

  let params = new URL(document.location).searchParams;
  let tempItem = localStorage["temp_popup_presented_1234"];
  var parsedBettyTypeInt = -1;

  try {
    let intAsString = ((tempItem || params.get("a1")) || "").split("b")[1];
    parsedBettyTypeInt = parseInt(intAsString);
  } catch (error) {
    //
  }

  let isAutoOpenEnabled = parsedBettyTypeInt >= 0;
  let genderMapping = [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1];

  var genderValue = 3;
  try {
    // 0 - female, 1 - male, 2 - unknown
    if (genderMapping[parsedBettyTypeInt] == null || genderMapping[parsedBettyTypeInt] == undefined) {
      // ignore...
    } else {
      genderValue = genderMapping[parsedBettyTypeInt];
    }

  } catch (error) {
    //
  }

  if (isAutoOpenEnabled) {
    if (tempItem) {
      localStorage.removeItem("temp_popup_presented_1234");

      setTimeout(() => {
        var hostApiKey = "";
        try {
          hostApiKey = bf_apiKey || "";
        } catch (error) {
          //
        }

        if (!hostApiKey.length) {
          try {
            let wrappedHostApiKey = document
              .getElementsByTagName("html")[0]
              .innerHTML.split("bf_ReporterPlugin.toggle")[1]
              .split(")")[0]
              .split("(")[1];

            var quotationMarks = "&quot;";
            if (wrappedHostApiKey.indexOf("'") >= 0) {
              quotationMarks = "'";
            }
            if (wrappedHostApiKey.indexOf('"') >= 0) {
              quotationMarks = '"';
            }

            hostApiKey = wrappedHostApiKey.split(quotationMarks)[1];
          } catch (error) {
            //console.log(error);
          }
        }

        if (hostApiKey && hostApiKey.length) {
          this.toggleButterflyReporter(hostApiKey);
        }
      }, 1000);

      var campaignId = `b${parsedBettyTypeInt}`;
      this.stubbedLanguageCode = "he";
      var automaticNavigationToBettyParam = "";
      if ((parsedBettyTypeInt > 3 && parsedBettyTypeInt < 16) || (parsedBettyTypeInt > 18 && parsedBettyTypeInt < 34)) {
        automaticNavigationToBettyParam = "&open_betty=2";
      }

      var bettyTypeStringParam = "";
      if (parsedBettyTypeInt > 0) {
        bettyTypeStringParam = `&betty_type=${parsedBettyTypeInt}`;
      }

      this.extraParams = `&gender=${genderValue}${automaticNavigationToBettyParam}${bettyTypeStringParam}&campaign_id=${campaignId}`;
    } else {
      localStorage["temp_popup_presented_1234"] = params.get("a1");
      window.location.replace(removeURLParameter(window.location.href, "a1"));
    }
  }

  function removeURLParameter(url, key) {
    var theAnchor = null;
    var newQueryString = "";
    var urlComponents = url.split("?");
    var baseURL = urlComponents[0];
    var existingQueryString = urlComponents[1];
    var ampersandOrEmpty = "";

    if (existingQueryString) {
      var tmpAnchor = existingQueryString.split("#");
      var params = tmpAnchor[0];
      theAnchor = tmpAnchor[1];
      if (theAnchor) existingQueryString = params;

      urlComponents = existingQueryString.split("&");

      for (var i = 0; i < urlComponents.length; i++) {
        if (urlComponents[i].split("=")[0] != key) {
          newQueryString += ampersandOrEmpty + urlComponents[i];
          ampersandOrEmpty = "&";
        }
      }
    } else {
      var tmpAnchor = baseURL.split("#");
      var params = tmpAnchor[0];
      theAnchor = tmpAnchor[1];

      if (params) {
        baseURL = params;
      }
    }

    return baseURL + (newQueryString.length ? "?" + newQueryString : "");
  }
}

var bf_ReporterPlugin = new TheButterflyReporterPlugin();
var bf_reporterState = {};