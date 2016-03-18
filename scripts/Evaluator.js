var evaluator = function ($menuElementAnchor) {
  'use strict';
  var self = this,
  base = dashboardBase('evaluator', 120);
  google.load('visualization', '1', { packages: ['table'] });

  function prepareDom() {
    $('body').attr('onKeyPress', 'return evaluator.checkKey(event)');
    // $('body').prepend('<div class="form-inline" role="form"><input type="text" class="form-control" placeholder="Ticker" onKeyPress="return evaluator.checkKey(event)" id="ticker"><button id="submit" class="btn btn-primary">Submit</button></div>');
    $('body').append('<div id="table"></div>');
    $('#submit').on('click', handleSubmission);
  }

  function checkKey(e) {
    if (e && e.keyCode === 13) {
      handleSubmission();
      $('#ticker').val('');
    }
    else {
      base.checkKey(e);
    }
  }

  function handleSubmission() {
    base.resetPage();

    var ticker = $('#ticker').val();
    processTicker(ticker);
  }

  function checkQueryString() {
    var param = /[&?]ticker=([^&]+)/.exec(location.search);

    if (param && typeof param[1] != 'undefined') {
      processTicker(param[1]);
    }
  }

  function processTicker(ticker) {
    var preparedTicker = ticker.toUpperCase();

    for (var i = 0; i < base.items.length; i++) {
      base.items[i].url = base.items[i].Prefix + preparedTicker + base.items[i].Postfix;
    }

    base.generateContent();
    base.generateMenu("", $menuElementAnchor);
    $('#ticker').val('');
    $('#ticker').focus();
  }

  function processResponse(response) {
    if (response.isError()) {
      alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

  var data = response.getDataTable(), i = 0, count = 0;      
  var chosenArray = data.tf, maxLength = -1;
      
   for (var key in data) {
       if( Object.prototype.toString.call( data[key] ) === '[object Array]' ) {
            console.log(key, data[key]);
           
           if(data[key].length > maxLength){
               chosenArray = data[key];
               maxLength = data[key].length
           }           
       }
   }   

    while (i < chosenArray.length) {
      var item = chosenArray[i].c;

      if (item[4].v === 1) {
        var postfix = item[2] === null ? "" : item[2].v;

        base.items.push({ div: "div" + count, title: item[0].v, Prefix: item[1].v, Postfix: postfix, PopUp: item[3].v });

        if (item[3].v === 0) {
          count++;
        }
      }
      i++;
    }

    return base.items;
  }

  function initialize(spreadsheet) {
    if (spreadsheet === undefined) {
      throw "Spreadsheet must be defined for evaluator.";
    }

    $(window).resize(base.resizeAllIframes);

    prepareDom();
    var query = new google.visualization.Query(spreadsheet);

    query.send(function (response) {
      processResponse(response);
      checkQueryString();
      $('#ticker').focus();
    });
  }

  return {
    loadNext: base.loadNext,
    loadPrevious: base.loadPrevious,
    Initialize: initialize,
    checkKey: checkKey,
    resizeIframe: base.resizeIframe,
    refreshPage: base.refreshPage
  };
}('#table');