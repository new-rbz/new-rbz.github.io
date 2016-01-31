(function (module) {
  'use strict';
  module.directive(yahooStockViewDirective.name, yahooStockViewDirective);

  function yahooStockViewDirective() {
    // syntax allows for a factory switch here!
    return {
      restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
      scope: {
        datasource: '=',
        title: '@'// @ reads the attribute value, = provides two-way binding, & works with functions
      },
      // template: '<div>{{ myVal }}</div>',
      templateUrl: "stockViewer.tmpl.html",
      controller: stockViewController.name, // Embed a custom controller in the directive
      controllerAs: 'vm'
      // link: function ($scope, element, attrs) { } //DOM manipulation
    };
  };

  module.controller(stockViewController.name, stockViewController);
  stockViewController.$inject = ['yahooFdsIntervalListener', 'yahooFinanceMetricsService', '$scope', '$window', '$stateParams', 'toaster', 'localStorageService'];

  function stockViewController(yahooFdsIntervalListener, yahooFinanceMetricsService, $scope, $window, $stateParams, toaster, localStorageService) {
    var vm = this,
        interval = parseInt($stateParams.interval);
    var timeout = interval ? interval : 5000;
vm.data = [];
    vm.add = add;
    vm.removeTicker = removeTicker;
    vm.clear = clear;
    vm.openFinviz = openFinviz;
    vm.openYahoo = openYahoo;
    vm.openGuru = openGuru;
    vm.evaluateSeriesData = evaluateSeriesData;
    vm.evaluateFundamentalData = evaluateFundamentalData;

    vm.adjustDividendDate = function (date) {
      if (!date)
        return date;

      var arrays = date.split('/');
      var month = parseInt(arrays[0]);
      var year = parseInt(arrays[2]);

      month += 3;
      month %= 12;

      arrays[0] = month.toString();
      arrays[2] = year.toString();
      var join = arrays.join('/');
      return join;
    };

    (function () {
      vm.showError = false;
      vm.isDetailed = true;

      vm.tickers = localStorageService.get('tickers');

      if (!vm.tickers) {
        vm.tickers = [];
        localStorageService.set('tickers', vm.tickers);
      }

      intervalPollYahooFinanceData();
    }());

    function openFinviz(ticker) {
      openUrl(ticker, 'http://finviz.com/quote.ashx?t=');
    };

    function openYahoo(ticker) {
      openUrl(ticker, 'http://finance.yahoo.com/q?s=', '&ql=1');
    };

    function openGuru(ticker) {
      openUrl(ticker, 'http://www.gurufocus.com/stock/');
    };

    function openUrl(ticker, prefix, postfix) {
      if (!postfix) {
        postfix = '';
      }

      $window.open(prefix + ticker + postfix);
    }

    function evaluateSeriesData(row) {
      return yahooFinanceMetricsService.evaluateSeriesData(row);
    };

    function evaluateFundamentalData(row) {
      return yahooFinanceMetricsService.evaluateFundamentalData(row);
    };

    /* ticker set operations */
    function addIndividualTicker(ticker) {
      if (vm.tickers.indexOf(ticker) !== -1) {
        var message = "ticker '" + ticker + "' is already in the list.";
        toaster.pop('warning', 'Duplicate Entry Attempt Blocked', message);
        return;
      }

      vm.tickers.push(ticker);
      localStorageService.set('tickers', vm.tickers);
      vm.ticker = '';
      intervalPollYahooFinanceData();
    }

    function addTicker(ticker) {
      var i, blahs = [];
      if (ticker.indexOf(" ") > -1) {
        blahs = ticker.split(' ');

        for (i = 0; i < blahs.length; i += 1) {
          addIndividualTicker(blahs[i]);
        }
      } else {
        addIndividualTicker(ticker);
      }
    }

    function add() {
      if (!vm.input || vm.input.length === 0) {
        return;
      }

      addTicker(vm.input);
      vm.input = "";
    }

    function removeTicker(ticker) {
      var index = vm.tickers.indexOf(ticker);
      vm.tickers.splice(index, 1);
      localStorageService.set('tickers', vm.tickers);
    }

    function clear() {
      vm.tickers = [];
      localStorageService.set('tickers', vm.tickers);
    }
    /*  */

    function intervalPollYahooFinanceData() {
      yahooFdsIntervalListener.innerCallYahoo($scope, vm.tickers, timeout,
        function (data) {
          vm.data = data;
        });
    }
  }
}(angular.module(modules.priceTracker)));