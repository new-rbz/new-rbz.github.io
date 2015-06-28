var dashboard = function ($menuElementAnchor) { 
  'use strict';
  var self = this,
  base = dashboardBase('dashboard', 80);

  function prepareDom() {
    $('body').attr('onKeyPress', 'return dashboard.checkKey(event)');
    $('body').append('<div id="table"></div>');
  }

  function processResponse(response) {
    if (response.isError()) {
      alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return 0;
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
        base.items.push({ div: "div" + count, url: item[2].v, title: item[0].v, type: item[1].v, PopUp: item[3].v });

        if (item[3].v === 0) {
          count++;
        }
      } 
        
      i++;
    }

    return base.items;
  }

  function Initialize(spreadsheet, menuType) {
    if (spreadsheet === undefined) {
      throw "Spreadsheet must be defined for dashboard.";
    }

    $(window).resize(base.resizeAllIframes);

    prepareDom();
    var query = new google.visualization.Query(spreadsheet);

    query.send(function (response) {
      processResponse(response);
      base.generateContent();
      base.generateMenu(menuType, $menuElementAnchor);
    });
  }

  return {
    loadNext: base.loadNext,
    loadPrevious: base.loadPrevious,
    Initialize: Initialize,
    refreshPage: base.refreshPage,
    resizeIframe: base.resizeIframe,
    checkKey: base.checkKey
  };
}('body');