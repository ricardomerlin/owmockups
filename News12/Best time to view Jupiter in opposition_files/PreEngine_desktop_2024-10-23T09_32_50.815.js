(function() { var preEngineFunc={ preEngineJS: function (loaderParams) { function createBrowsiSpot(e){let t=document.createElement("browsirailspot");t.style.width="100%",t.style.display="block",e.insertAdjacentElement("beforeend",t)}function addPageCSS(e){var t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style"),r=document.createTextNode(e);i.type="text/css",i.styleSheet?i.styleSheet.cssText=r.nodeValue:i.appendChild(r),t.appendChild(i)}addPageCSS(`
    div[spottype="fixed_right_rail"]{

        div[id*="browsi_adContainer_ai_700"]{
            display: flex;
            justify-content: flex-start;

            div[id*="google_ads_iframe"]{
                display: flex !important;
            }
        }
            
    }    
    `);let anchor=document.querySelector('div[gridarea="more-stories"]');anchor&&createBrowsiSpot(anchor),loaderParams.externalFlowHandler={postFetch:function(e,t){if("#__next > div.sc-dmyCSP.fiyYJA > div > div.sc-AngWr.kmZxLS > div > div:nth-child(2)"===e.selector){let i=e.browsiAd.wrapper;if(!i)return;e.browsiAd.container.style.display="block";let r=i.querySelector('[id*="google_ads_iframe"]');if(r){r.style.display="flex";let a=r.querySelector("iframe")?.getAttribute("width");a&&Number(a)&&(i.style.marginLeft=`${(800-Number(a))/2}px`,i.style.marginRight=`${(800-Number(a))/2}px`,r.querySelector("iframe").style.width=`${a}px`)}}}}; }}; window["__browsiLoadFunc"](window["__browsiLoadObject"], preEngineFunc); })();