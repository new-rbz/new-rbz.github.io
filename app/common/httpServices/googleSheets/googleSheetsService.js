(function (module) {
  'use strict';
  try {
    google.load('visualization', '1', { packages: ['table'] });
  } catch (e) {
  }

  module.service(googleSheetsService.name, googleSheetsService);

  googleSheetsService.$inject = ['$q', '$log', 'toaster'];

  function googleSheetsService($q, $log, toaster) {
    var vm = this, deferred;

    vm.processResponse = processResponse;

    vm.get = function (url) {
      deferred = $q.defer();

      try {
        var query = new google.visualization.Query(url);
        query.send(function (data) {
          deferred.resolve(data);
        });
      } catch (ex) {
        toaster.warning('error', 'google sheets service did not respond correctly, you are viewing cached data.');
        $log.error(ex);
        return {then: function() {
          
          }
        };
      } 

      return deferred.promise;
    };

    function processResponse(response, adapter) {
      var data, chosenArray = [], maxLength = -1, error, key, results;

      if (response.isError()) {
        error = 'Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage();
        toaster.warning(error);
        throw error;
      }

      data = response.getDataTable();
      chosenArray = data.tf;

      for (key in data) {
        if (isArray(data[key])) {
          if (data[key].length > 0 && data[key][0].c && isArray(data[key][0].c) && data[key].length > maxLength) {
            chosenArray = data[key];
            maxLength = data[key].length;
          }
        }
      }

      results = adapter.process(chosenArray);
      return results;
    };

    function isArray(object) {
      return Object.prototype.toString.call(object) === '[object Array]';
    }
  }
}(angular.module(modules.common)));
