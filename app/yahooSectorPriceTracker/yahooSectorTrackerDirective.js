(function (module) {
  'use strict';
  module.directive(yahooSectorTrackerDirective.name, yahooSectorTrackerDirective);

  function yahooSectorTrackerDirective() {
    // syntax allows for a factory switch here!
    return {
      restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
      scope: {
        datasource: '=',
        title: '@'// @ reads the attribute value, = provides two-way binding, & works with functions
      },
      // template: '<div>{{ myVal }}</div>',
      templateUrl: "sectorViewer.tmpl.html",
      controller: sectorViewController.name, // Embed a custom controller in the directive
      controllerAs: 'vm'
      // link: function ($scope, element, attrs) { } //DOM manipulation
    };
  };

  module.controller(sectorViewController.name, sectorViewController);
  sectorViewController.$inject = [
    'googleSheetsService',
    'adapterFactory',
    'yahooFdsIntervalListener',
    'localStorageService',
    '$scope',
    '$stateParams',
    '$timeout',
    '$window',
    'yahooFinanceMetricsService'];

  function sectorViewController(
    googleSheetsService,
    adapterFactory,
    yahooFdsIntervalListener,
    localStorageService,
    $scope,
    $stateParams,
    $timeout,
    $window,
    yahooFinanceMetricsService) {
    var vm = this,
      interval = parseInt($stateParams.interval);
    var timeout = interval ? interval : 5000,
        flatTickersList = [];

    vm.openTradeView = openTradeView;
    vm.openFinviz = openFinviz;
    vm.openYahoo = openYahoo;
    vm.openGuru = openGuru;
    vm.evaluateSeriesData = evaluateSeriesData;
    vm.evaluateFundamentalData = evaluateFundamentalData;
    vm.handleDataSourceChange = initialize;

    vm.adjustDividendDate = function (date) {
      if(!date)
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

    initialize();

    function openTradeView(ticker) {
      openUrl(ticker, 'https://dwq4do82y8xi7.cloudfront.net/widgetembed/?symbol='+ ticker +'&interval=D&hidesidetoolbar=0&symboledit=1&toolbarbg=f4f7f9&studies=&hideideas=0&theme=Black&timezone=exchange&showpopupbutton=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&showpopupbutton=1');
    };

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

    function evaluateFundamentalData(row) {
      return yahooFinanceMetricsService.evaluateFundamentalData(row);
    };

    function evaluateSeriesData(row) {
      return yahooFinanceMetricsService.evaluateSeriesData(row);
    };

    function initialize() {
      vm.isDetailed = false;
      vm.data = [];
      callGoogle();
    }

    function callGoogle() {
      var currentAdapter;

      adapterFactory.get(vm.selectedSource).then(function (adapter) {
        vm.sources = adapterFactory.sourceKeys;
        currentAdapter = adapter;
        googleSheetsService.get(currentAdapter.url).then(handleGoogleData);

        function handleGoogleData(data) {
          vm.data = googleSheetsService.processResponse(data, currentAdapter.adapter);
          localStorageService.set(vm.selectedSource + '.data', vm.data);
          var first = vm.data[0];
          vm.currentTab = first.sector;

          flatTickersList = getFlatTickersList();
          intervalPollYahooFinanceData();
        }
      });
    }

    function intervalPollYahooFinanceData() {
      yahooFdsIntervalListener.innerCallYahoo(
        $scope,
        flatTickersList,
        timeout,
        function (data) {
          if (!isStillTheCurrentView(data)) {
            return true;
          }

          apply(data);
          return false;
        });
    }

    function isStillTheCurrentView(result) {
      return result.length === flatTickersList.length && result[0].symbol === flatTickersList[0];
    }

    function apply(results) {
      var keyField = 'symbol';

      for (var i = 0; i < results.length; i++) {
        for (var j = 0; j < vm.data.length; j++) {
          for (var k = 0; k < vm.data[j].list.length; k++) {
            if (vm.data[j].list[k] === results[i][keyField] || results[i][keyField] === vm.data[j].list[k][keyField]) {
              vm.data[j].list[k] = results[i];
            }
          }
        }
      }

      localStorageService.set(vm.selectedSource + '.data', vm.data);
    }

    function getFlatTickersList() {
      var tickers = [];
      for (var i = 0; i < vm.data.length; i++) {
        for (var j = 0; j < vm.data[i].list.length; j++) {
          tickers.push(vm.data[i].list[j]);
        }
      }

      return tickers;
    }
  }
}(angular.module(modules.sectorTracker)));