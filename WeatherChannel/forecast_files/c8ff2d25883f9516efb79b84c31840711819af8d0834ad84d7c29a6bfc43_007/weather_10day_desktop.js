!function(){
  const gamDiv = top.document.getElementById('WX_OutStream1ConnatixFloating');
  if (gamDiv) gamDiv.parentElement.parentElement.style.display = "none";
  
  if(isIPad())return;

  let foundCookie = false; //top.document.cookie.split('; ').find(row => (row.startsWith('cnxFloat')) ? row.split('=')[1] : null);

  let wMC, cW, wW, num=0;

  const renderingSettings = {
    rendering: {
      containerSelector: ".region-main.regionMain",
      forceInsertPath: true, 
      insertPosition: 0, //WithinContainer 
      postition: 2
    }	
  }

  const setup = setInterval(()=>{
    wMC = top.document.querySelector('[class^="DaybreakLargeScreen--gridWrapper"]');
    if (wMC){
      //cW = wMC.offsetWidth;
      //wW = top.window.innerWidth;
      //((wW - cW - 24) / 2) >= 300 -> calculation for screensize
      if (foundCookie){
        cnx.cmd.push(function() {    
          cnx({      
            playerId: "9881f185-f005-497f-b9d8-3941eacac7bb", // 10Day - Embed Player | Desktop
            settings: {
              rendering: {
                containerSelector: ".region-main.regionMain",
                insertPosition: 0, //WithinContainer 
                postition: 2,
                forceInsertPath: true,
              }
            },
          }).render("cnx-weather-target");  
        });
      }else{
        cnx.cmd.push(function() {    
          cnx({      
            playerId: "ce4f0e08-549f-4b64-bb82-642f1c15b6a4", // 10Day - Floating Player | Desktop
            settings: {
              rendering: {
                containerSelector: `[class^="DaybreakLargeScreen--gridWrapper"]`,
                insertPosition: 1, //BeforeContainer 
                forceInsertPath: true, 
              }
            }
          }).render("cnx-weather-target");  
        });
      } 

      clearInterval(setup)
    }
    num++
    if(num===30)clearInterval(setup);
  },50);


}();

function isIPad() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /iPad/.test(userAgent) || 
    (/Macintosh/.test(userAgent) && navigator.maxTouchPoints > 1);
}