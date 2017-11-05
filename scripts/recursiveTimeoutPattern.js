function recursiveTimeoutPattern(operation, timeout, refreshOnMobile) {
  if (!refreshOnMobile && typeof window.orientation !== "undefined") {
    return;
  }

  if (!timeout || !(!isNaN(parseFloat(timeout)) && isFinite(timeout))) {
    timeout = 60000;
  }

  setTimeout(function() {
    if (operation && typeof operation === "function") {
      operation();
      recursiveTimeoutPattern(operation, timeout, refreshOnMobile);
    }
  }, timeout);
}

recursiveTimeoutPattern(function() {
  var imgs = document.getElementsByTagName("img"),
    substring = "&rand=";

  if (navigator && navigator.onLine) {
    for (var i = 0; i < imgs.length; i++) {
      if (imgs[i].src.indexOf("https://s.gravatar.com/avatar/") === -1) {
        var src = imgs[i].src.substring(0, 55);
        imgs[i].src = src.split(substring)[0] + substring + Math.random();
      }
    }
  }
}, 15000);
