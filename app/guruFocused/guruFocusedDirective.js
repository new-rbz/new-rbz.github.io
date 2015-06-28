(function (module) {
  'use strict';
  module.directive(guruFocusedDirective.name, guruFocusedDirective);

  function guruFocusedDirective() {
    // syntax allows for a factory switch here!
    return {
      restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
      scope: {
        datasource: '=',
        title: '@'// @ reads the attribute value, = provides two-way binding, & works with functions
      },
      // template: '<div>{{ myVal }}</div>',
      templateUrl: "guruFocused.tmpl.html",
      controller: guruFocusedController.name, // Embed a custom controller in the directive
      controllerAs: 'vm'
      // link: function ($scope, element, attrs) { } //DOM manipulation
    };
  };

  module.controller(guruFocusedController.name, guruFocusedController);

  guruFocusedController.$inject = ['$window', 'localStorageService'];

  function guruFocusedController($window, localStorageService) {
    var vm = this, key = "guruFocused";

    this.submit = function () {
      var split = vm.input.split(/[ ,\n\t]+/);

      split = split.filter(function (e) { return e; });

      for (var i = 0; i < split.length; i++) {
        split[i] = split[i].toUpperCase();
      }

      vm.tickers = split;
      localStorageService.set(key, vm.tickers);
    };

    this.open = function (symbol) {
      vm.currentSymbol = symbol;

      if (vm.selectedSite.name === '') {
        return;
      }

      $window.open(vm.selectedSite.prefix + symbol + vm.selectedSite.suffix);
    };

    this.openAll = function () {
      if (vm.tickers.length > 1 || vm.selectedSite.name === 'Evaluator') {
        console.log('Denied!!!! You don\'t want to do that! You will kill your browser.');
        return;
      }

      if (vm.selectedSite.name === '') {
        return;
      }

      for (var i = 0; i < vm.tickers.length; i++) {
        $window.open(vm.selectedSite.prefix + vm.tickers[i] + vm.selectedSite.suffix);
      }
    };

    (function initialize() {
      vm.input = '';
      vm.tickers = localStorageService.get(key);

      if (!vm.tickers) {
        vm.tickers = [];
      }

      for (var i = 0; i < vm.tickers.length; i++) {
        vm.input += vm.tickers[i] + " ";
      }

      // todo: get sites from google docs.
      vm.sites = [
        { name: '', prefix: '', suffix: '' },
        { name: 'GuruFocus', prefix: 'http://www.gurufocus.com/stock/', suffix: '' },
        { name: 'Yahoo Finance', prefix: 'http://finance.yahoo.com/q?s=', suffix: '&ql=1' },
        { name: 'Finviz', prefix: 'http://finviz.com/quote.ashx?t=', suffix: '' },
        { name: 'Evaluator', prefix: 'http://cremefilled.github.io/Evaluator.html?ticker=', suffix: '' }
      ];

      vm.selectedSite = vm.sites[0];
    }());
  }
}(angular.module(modules.guruFocused)));
