(function () {
  'use strict';
  angular.module(
    modules.randomProject,
    [
      modules.bowerDependenciesCore,

      /* application modules: only this main module does nothing but organize the others. */
     modules.common,
     modules.priceTracker,
     modules.sectorTracker,
     modules.guruFocused,
     modules.finvizChartViewer
    ]);

  // Handle routing errors and success events
  /* app.run(['$route', function ($route) {
        // Include $route to kick start the router.
     }]);
  */
}());
