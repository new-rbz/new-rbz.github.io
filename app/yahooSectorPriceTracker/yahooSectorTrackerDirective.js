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

    vm.sources = [];
    vm.data = [];
    vm.openTradeView = openTradeView;
    vm.openFinviz = openFinviz;
    vm.openYahoo = openYahoo;
    vm.openGuru = openGuru;
    vm.evaluateSeriesData = evaluateSeriesData;
    vm.evaluateFundamentalData = yahooFinanceMetricsService.evaluateFundamentalData;
    vm.handleDataSourceChange = initialize;
    vm.changeSector=changeSector;
    vm.MovingAvgMeaning = yahooFinanceMetricsService.MovingAvgMeaning; 
    vm.getEpsGrowth =yahooFinanceMetricsService.getEpsGrowth;
    vm.getDailyPercentChange =yahooFinanceMetricsService.getDailyPercentChange;
    vm.getMungerBuffettRatio = yahooFinanceMetricsService.getMungerBuffettRatio;
    vm.getRegressionPotential =yahooFinanceMetricsService.getRegressionPotential;
    vm.getRelativeVolume = yahooFinanceMetricsService.getRelativeVolume;
    vm.adjustDividendDate = adjustDividendDate; 

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
      vm.isDetailed = true;
      vm.currentsector = undefined;
      vm.data = [];
      vm.rawResults = [];
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
      vm.rawResults = results;
      
      if(vm.data && vm.data.length && vm.data.length > 0){
        for (var r = 0; r < vm.rawResults.length; r++) {
          for (var i = 0; i < vm.data.length; i++) {
            for (var j = 0; j < vm.data[i].list.length; j++) {
              if( vm.rawResults[r].symbol === vm.data[i].list[j]){
                vm.rawResults[r].sector = vm.data[i].sector;
                vm.rawResults[r].relativeVolume = parseFloat(vm.getRelativeVolume(vm.rawResults[r]));
                if(isNaN(vm.rawResults[r].relativeVolume) || !isFinite(vm.rawResults[r].mungerBuffettRatio)){
                  vm.rawResults[r].relativeVolume = 0;
                }

                vm.rawResults[r].dailyPercentChange = parseFloat(vm.getDailyPercentChange(vm.rawResults[r]));
                if(isNaN(vm.rawResults[r].dailyPercentChange)){
                  vm.rawResults[r].dailyPercentChange = 0;
                }

                vm.rawResults[r].regressionPotential = parseFloat(vm.getRegressionPotential(vm.rawResults[r]));
                if(isNaN(vm.rawResults[r].regressionPotential)){
                  vm.rawResults[r].regressionPotential = 0;
                }

                vm.rawResults[r].mungerBuffettRatio = parseFloat(vm.getMungerBuffettRatio(vm.rawResults[r]));
                
                if(isNaN(vm.rawResults[r].mungerBuffettRatio) || !isFinite(vm.rawResults[r].mungerBuffettRatio)){
                  vm.rawResults[r].mungerBuffettRatio = 0;
                }
                vm.rawResults[r].epsGrowth = parseFloat(vm.getEpsGrowth(vm.rawResults[r]));

                if(isNaN(vm.rawResults[r].epsGrowth)){
                  vm.rawResults[r].epsGrowth = 0;
                }

                vm.rawResults[r].fundamental = parseFloat( vm.evaluateFundamentalData(vm.rawResults[r]));

                if(isNaN(vm.rawResults[r].fundamental)){
                  vm.rawResults[r].fundamental = 0;
                }

                vm.rawResults[r].MarketCapitalization = (vm.rawResults[r].MarketCapitalization && vm.rawResults[r].MarketCapitalization.toString().indexOf("B") >= 0) 
                  ? parseFloat(vm.rawResults[r].MarketCapitalization) * 1000 : parseFloat(vm.rawResults[r].MarketCapitalization);
              
                if(isNaN(vm.rawResults[r].MarketCapitalization)){
                  vm.rawResults[r].MarketCapitalization = 0;
                }
                vm.rawResults[r].LastTradePriceOnly = parseFloat(vm.rawResults[r].LastTradePriceOnly);
                
                if(isNaN(vm.rawResults[r].LastTradePriceOnly)){
                  vm.rawResults[r].LastTradePriceOnly = 0;
                }
                vm.rawResults[r].PreviousClose = parseFloat(vm.rawResults[r].PreviousClose);
                
                if(isNaN(vm.rawResults[r].PreviousClose)){
                  vm.rawResults[r].PreviousClose = 0;
                }
                vm.rawResults[r].ShortRatio = parseFloat(vm.rawResults[r].ShortRatio);
                
                if(isNaN(vm.rawResults[r].ShortRatio)){
                  vm.rawResults[r].ShortRatio = 0;
                }
                vm.rawResults[r].EPSEstimateCurrentYear = parseFloat(vm.rawResults[r].EPSEstimateCurrentYear);
                
                if(isNaN(vm.rawResults[r].EPSEstimateCurrentYear)){
                  vm.rawResults[r].EPSEstimateCurrentYear = 0;
                }

                vm.rawResults[r].epsGrowth = parseFloat(vm.rawResults[r].epsGrowth);

                if(isNaN(vm.rawResults[r].epsGrowth)){
                  vm.rawResults[r].epsGrowth = 0;
                }

                vm.rawResults[r].PriceBook = parseFloat(vm.rawResults[r].PriceBook);

                if(isNaN(vm.rawResults[r].PriceBook)){
                  vm.rawResults[r].PriceBook = 0;
                }

                vm.rawResults[r].PriceSales = parseFloat(vm.rawResults[r].PriceSales);

                if(isNaN(vm.rawResults[r].PriceSales)){
                  vm.rawResults[r].PriceSales = 0;
                }
                
                vm.rawResults[r].PERatio = parseFloat(vm.rawResults[r].PERatio);

                if(isNaN(vm.rawResults[r].PERatio)){
                  vm.rawResults[r].PERatio = 0;
                }

                vm.rawResults[r].PEGRatio = parseFloat(vm.rawResults[r].PEGRatio);

                if(isNaN(vm.rawResults[r].PEGRatio)){
                  vm.rawResults[r].PEGRatio = 0;
                }

                vm.rawResults[r].DividendYield = parseFloat(vm.rawResults[r].DividendYield);

                if(isNaN(vm.rawResults[r].DividendYield)){
                  vm.rawResults[r].DividendYield = 0;
                }
              }
            }
          }
        }
      }
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

    function changeSector(sector) {
      if(vm.currentsector === sector){
        vm.currentsector = undefined;
      } else {
        vm.currentsector = sector;
      }
    }

    function adjustDividendDate(date) {
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
    }
  }
}(angular.module(modules.sectorTracker)));