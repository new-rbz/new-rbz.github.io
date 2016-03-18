// http://stackoverflow.com/questions/20369377/how-to-use-http-get-in-angularjs-correctly-in-specific-for-an-external-api-cal
(function (module) {
  'use strict';
  module.service(yahooFinanceDataService.name, yahooFinanceDataService);

  yahooFinanceDataService.$inject = ['$http', '$log', '$q', 'toaster'];

  function yahooFinanceDataService($http, $log, $q, toaster) {
    var thisSvc = this;

    thisSvc.getData = function (symbols) {
      var input = [], clone = symbols.slice(0);

      while (clone.length) {
        input.push(clone.splice(0, 100));
      }

      var queries = [];

      for (var i = 0; i < input.length; i++) {
        queries.push(encodeURIComponent("select * from yahoo.finance.quotes where symbol in ('" + input[i].join() + "')"));
      }
      // https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20yahoo.finance.balancesheet%20WHERE%20symbol%3D'T'&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys
      var queues = [];

      for (var j = 0; j < queries.length; j++) {
        queues.push(thisSvc.issueRequest(queries[j]));
      }

      return $q
        .all(queues)
        .then(function (data) {
          var result = [];

          for (var index = 0; index < data.length; index++) {
            if (data[index].data && data[index].data.query && data[index].data.query.results) {
              var tmp = data[index].data.query.results.quote;
              result = result.concat(tmp);
            }
          }

          return result;
        });
    };

    thisSvc.issueRequest = function (query) {
      return $http({
        method: 'GET',
        url: "http://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json&diagnostics=false&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        // params unexpectedly uriencodes all parameters! so I had to hardcode those parameters above
        params: {
          //'q' : query, 
          //'format': 'json', 
          //'diagnostics': 'false', 
          //'env': 'http://datatables.org/alltables.env' 
        }
        //,headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
      }).success(function (data) {
        if (!data.query.results || !data.query.results.quote) {
          toaster.pop('error', 'Invalid Response: Results returned null', 'This is most likely caused by having bad ticker symbol');
          $log.error('Invalid Response: Results returned null. This is most likely caused by having bad ticker symbol');
          $log.error(query, data);
        }

        return data;
      }).error(function (response, status) {
        toaster.pop(
          'Error',
          "Failed to contact Yahoo Finance",
          "Failed to get the name, status is " + status);

        $log.log("Failed to get the name, status is " + status + "response is ", response);
      });
    };
  }
}(angular.module(modules.common)));