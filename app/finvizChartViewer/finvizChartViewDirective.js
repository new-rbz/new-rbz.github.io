(function (module) {
  'use strict';
  module.directive(finvizChartViewDirective.name, finvizChartViewDirective);

  function finvizChartViewDirective() {
    // syntax allows for a factory switch here!
    return {
      restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
      scope: {
        datasource: '=',
        title: '@'// @ reads the attribute value, = provides two-way binding, & works with functions
      },
      // template: '<div>{{ myVal }}</div>',
      templateUrl: "finvizChartView.tmpl.html",
      controller: finvizChartViewController.name, // Embed a custom controller in the directive
      controllerAs: 'vm'
      // link: function ($scope, element, attrs) { } //DOM manipulation
    };
  };

  module.controller(finvizChartViewController.name, finvizChartViewController);
  finvizChartViewController.$inject = ['googleSheetsService', 'adapterFactory', '$window'];

  // http://stackoverflow.com/questions/24535446/routeprovider-using-resolve-to-pass-value-to-controller
  function finvizChartViewController(googleSheetsService, adapterFactory, $window) {
    var vm = this,
      i = 0;

    vm.data = [];
vm.sources = [];

    vm.tabSwitch = function (sector) {
      var newSectorElement, oldSectorElement;

      for (i = 0; i < vm.data.length; i += 1) {
        if (vm.data[i].sector === sector) {
          newSectorElement = vm.data[i];
        }

        if (vm.data[i].sector === vm.currentTab) {
          oldSectorElement = vm.data[i];
        }
      }

      if (newSectorElement) {
        newSectorElement.transition = "bounceInLeft";
      }

      if (oldSectorElement) {
        oldSectorElement.transition = "slideOutRight";
      }

      vm.currentTab = sector;
    };

    vm.selected = function (ticker) {
      if (ticker) {
        $window.open('http://finviz.com/quote.ashx?t=' + ticker, '_blank');
      }
    };

    vm.handleDataSourceChange = function () {
      initialize();
    };

    function initialize() {
      vm.data = [];
      var currentAdapter;
      adapterFactory
        .get(vm.selectedSource)
        .then(function (adapter) {
          vm.sources = adapterFactory.sourceKeys;
          currentAdapter = adapter;
          googleSheetsService
          .get(currentAdapter.url)
          .then(function (data) {
            vm.data = googleSheetsService.processResponse(data, currentAdapter.adapter);
            var first = vm.data[0];
            vm.currentTab = first.sector;
          });
        });
    }

    (initialize());
  }
}(angular.module(modules.finvizChartViewer)));
