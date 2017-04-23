function recursiveTimeoutPattern(operation, timeout, refreshOnMobile) {
  if (!refreshOnMobile && typeof window.orientation !== "undefined") {
    return;
  }

  if(!timeout || !(!isNaN(parseFloat(timeout)) && isFinite(timeout))){
    timeout = 60000;
  }
 
  setTimeout(function(){
    if(operation && typeof operation === "function"){
      operation();
      recursiveTimeoutPattern(operation, timeout, refreshOnMobile);
    }  
  }, timeout);
}
