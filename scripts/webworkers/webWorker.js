/* jQuery DOM shim */
var document = (self.document = {
  parentNode: null,
  nodeType: 9,
  toString: function() {
    return "FakeDocument";
  }
});
var window = (self.window = self);
var fakeElement = Object.create(document);
fakeElement.nodeType = 1;
fakeElement.toString = function() {
  return "FakeElement";
};
fakeElement.parentNode = fakeElement.firstChild = fakeElement.lastChild = fakeElement;
fakeElement.ownerDocument = document;

document.head = document.body = fakeElement;
document.ownerDocument = document.documentElement = document;
document.getElementById = document.createElement = function() {
  return fakeElement;
};
document.createDocumentFragment = function() {
  return this;
};
document.getElementsByTagName = document.getElementsByClassName = function() {
  return [fakeElement];
};
document.getAttribute = document.setAttribute = document.removeChild = document.addEventListener = document.removeEventListener = function() {
  return null;
};
document.cloneNode = document.appendChild = function() {
  return this;
};
document.appendChild = function(child) {
  return child;
};
/* jQuery DOM shim */
//http://stackoverflow.com/questions/6179159/accessing-localstorage-from-a-webworker
/*
Web workers only have access to the following:

XMLHttpRequest
Application Cache
create other web workers
navigator object
location object
setTimeout method
clearTimeout method
setInterval method
clearInterval method
importScripts method
JSON
Worker
The window or parent objects are not accessible from a Web worker therefore you can't access the localStorage.

To communicate between window and the workerglobalscope you may use postMessage() function and onmessage event.

Accessing the DOM and window would not be thread safe, since the child thread would have the same privileges as its parent.
*/

importScripts("https://code.jquery.com/jquery-2.2.4.min.js");
console.log("Web worker JQuery version:", $.fn.jquery);
postMessage("Worker is ready...");

var vm = {};
vm.postMessage = postMessage;

$.get("http://localhost:7070/api/topics", function(data) {
  vm.data = data;
});

function recursiveTimeoutPattern() {
  setTimeout(function() {
    if (vm.message === "stop") {
      close();
      return;
    }

    if (vm.data) {
      postMessage(vm.data);
      console.log("from webworker:=> ", vm.data);
      delete vm.data;
    }
    recursiveTimeoutPattern();
  }, 1000);
}
recursiveTimeoutPattern();

onmessage = function(e) {
  postMessage("message received.");
  console.log(e);
  postMessage(e.data);

  switch (e.data) {
    case "stop":
      vm.message = "stop";
      close();
      return;
    default:
      break;
  }

  if (e.data === "start") {
    var max = 500000000;

    for (var i = 0; i < max; i++) {
      if (i % 100000 === 0) {
        // postMessage('Progress: ' + (i / max * 100).toFixed(0) + '%');
      }
    }

    postMessage("Done!");
  }
};
