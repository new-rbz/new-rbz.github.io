(function (module) {
  'use strict';
  module.directive(menuDirective.name, menuDirective);

  function menuDirective() {
    return {
      restrict: 'EA',
      scope: {
        title: '@'
      },
      templateUrl: '/app/common/menu/menu.tmpl.html',
      controller: menuController.name,
      controllerAs: 'vm'
    };
  }

  module.controller(menuController.name, menuController);

  menuController.$inject = ['$location'];

  function menuController($location) {
    var vm = this;

    vm.go = function (item) {
      vm.ActiveTab = item.state;
      $location.path(item.routeUrl);
    };

    (function initialize() {
      var i;
      vm.ActiveTab = '';

      for (i = 0; i < routeData.routes.length; i += 1) {
        routeData.routes[i].routeUrl = routeData.routes[i].routeUrl.replace('/{interval}', '/5000');
        if (routeData.defaultRoute === routeData.routes[i].state) {
          vm.ActiveTab = routeData.routes[i].state;
        }
      }

      vm.data = routeData;
    }());
  }
}(angular.module(modules.common)));
