const doc = typeof window !== 'undefined' ? window.document : document;
const thisScript = doc.currentScript;
const domainUrl = 'https://ara.paa-reporting-advertising.amazon';
const MIN_SUPPORTED_BRAND_VERSIONS = {
    'Google Chrome': 106,
};

function checkIsBrowserSupported() {
    const userAgentData = navigator.userAgentData;
    if (userAgentData == null) {
        return false;
    }
    const brands = userAgentData.brands;
    return isEligible(brands) && checkIsFeatureAllowed();
}

function isEligible(agentBrands) {
    if (!agentBrands || agentBrands.length === 0) {
        return false;
    }
    for (let brand of agentBrands) {
        const version = Number.parseFloat(brand.version);
        if (version >= MIN_SUPPORTED_BRAND_VERSIONS[brand.brand]) {
            return true;
        }
    }
    return false;
}

function checkIsFeatureAllowed() {
    if ('featurePolicy' in document && typeof document.featurePolicy.allowsFeature === 'function') {
        return document.featurePolicy.allowsFeature('attribution-reporting');
    } else {
        return false;
    }
}

function checkIsFencedFrameReportingAllowed() {
    return (!!window.fence?.reportEvent)
}

function extractParamsValues(paramKeyMapping) {
    const url = new URL(thisScript.src);

    var queryString = '';
    try {
        queryString = url.search;
    } catch (error) {
        console.log ("Error obtaining script query parameters: ", error);
    }

    var paramValues = {};
    try {
        var payloadParams = new URLSearchParams(decodeURIComponent(queryString));
        if (payloadParams) {
            for (var paramKey in paramKeyMapping) {
                var value = payloadParams.has(paramKey) ? payloadParams.get(paramKey) : null;
                var mappedParamKey = paramKeyMapping[paramKey];
                paramValues[mappedParamKey] = value;
            }
        }
    } catch (error) {
        console.log ("Error fetching params: ", error);
    }
    return paramValues;
}

async function handleView() {
    const baseUrl = domainUrl + '/register-source';
    const paramKeyMapping = {
        adId: 'lineId',
        bidId: 'bidId',
        campaignId: 'campaignId',
        clickDestnUrl: 'destination',
        creativeId: 'creativeId',
        gdpr: 'gdpr',
        gdprConsent: 'gdprConsent',
        is3p: 'is3p',
        sessionId: 'sessionId', 
        srcName: 'sourceName',
        uid: 'uid',
    };
    const params = extractParamsValues(paramKeyMapping);
    let queryString = '?eventType=view';
    for(let key in params){
        const value = params[key];
        if (value === undefined || value == null || value === 'null') {
            continue
        }
        queryString += '&' + key + '=' + encodeURIComponent(value);
    }

    try {
        const requestOptions = {
            keepalive: true,
            attributionReporting: {
                eventSourceEligible: true,
                triggerEligible: true
            },
            credentials: 'include'
        };
        const response = await suppressedAsync(window.fetch(baseUrl + queryString, requestOptions));
        const responseJson = await suppressedAsync(response.json());

        if ('responseKey' in responseJson && 'campaignId' in params) {
            await traffic({
                adId: responseJson['responseKey'],
                campaignId: params['campaignId']
            });
        } else {
            // empty response, no-op
        }
    } catch (e) {
        reportError(e);
    }

    if (checkIsFencedFrameReportingAllowed()) {
        window.fence.reportEvent({
            'eventType': 'view',
            'eventData': '',
            'destination': ['buyer', 'seller']
        })
    }
}

async function traffic(params) {
    const assetLocation = domainUrl + '/assets/traffic_module.js';

    try {
        const worklet = await sharedStorage.createWorklet(assetLocation, {dataOrigin: "script-origin"});
        worklet.run('traffic-module', {
            data: params,
        });
    } catch (error) {
        reportError(error)
    }
}

async function suppressedAsync(promise) {
    promise.catch((e) => reportError(e));
    return await promise;
}

function reportError(error) {
    const e = error;
}

function init() {
    if (checkIsBrowserSupported()) {
        document.addEventListener("amzncsmIabView", handleView);
    }
}

init();
