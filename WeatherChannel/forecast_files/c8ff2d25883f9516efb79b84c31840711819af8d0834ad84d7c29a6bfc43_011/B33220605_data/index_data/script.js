window.startCreative = function () {
    if (window.frameUpdate) {
      window.frameUpdate();
    }
    
document.body.addEventListener("click", function (e) {
  if (e.button !== 2) {
    window.openLink("clickTag1");
  }
});
  
  }