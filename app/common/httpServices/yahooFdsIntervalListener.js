(function (module) {
  'use strict';
  module.service(yahooFdsIntervalListener.name, yahooFdsIntervalListener);

  yahooFdsIntervalListener.$inject = ['yahooFinanceDataService', '$timeout'];

  function yahooFdsIntervalListener(yahooFinanceDataService, $timeout) {
    var thisSvc = this, timer;

    thisSvc.innerCallYahoo = function (scope, tickers, timeout, callback) {
      if (!tickers || tickers.length === 0) {
        return;
      }

      yahooFinanceDataService.getData(tickers.slice(0)).then(handleData);

      scope.$on('$destroy', function () {
        cancelTimer();
      });

      function handleData(data) {
        var results = insureArray(data);

        var shouldCallsStop = callback(results);

        if (!shouldCallsStop) {
          timer = $timeout(function () {
            thisSvc.innerCallYahoo(scope, tickers, timeout, callback);
          }, timeout);
        }
      }

      function insureArray(data) {
        var results;
        if (angular.isArray(data)) {
          results = data;
        } else {
          results = [];
          results.push(data);
        }

        return results;
      }

      function cancelTimer() {
        if (timer) {
          $timeout.cancel(timer);
        }
      }
    }
  }
}(angular.module(modules.common)));