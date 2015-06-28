(function (module) {
  'use strict';

  /*  overviewApp.run(function($templateCache) {
    $templateCache.put('Views', 'This is the content of the template');
  });*/
  module.config(routeLoader);

  routeLoader.$inject = ['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider'];

  function routeLoader($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
    var x, current;

    localStorageServiceProvider
      .setPrefix(modules.common)
      .setStorageType('localStorage') // other option is 'sessionStorage'
      .setNotify(true, true);
    
    for (x in routeData.routes) {
      current = routeData.routes[x];

      $stateProvider.state(
        current.routeUrl,
        {
          url: current.routeUrl,
          templateUrl: current.templateUrl,
          controller: current.controller,
          controllerAs: 'vm'
        }
      );
    }

    $urlRouterProvider.otherwise(routeData.defaultRoute);
  }	
}(angular.module(modules.common)));
