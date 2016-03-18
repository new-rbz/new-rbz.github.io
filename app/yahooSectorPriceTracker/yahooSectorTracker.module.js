(function () {
  'use strict';

  // update popover template for binding unsafe html
  angular.module("template/popover/popover.html", []).run(["$templateCache", function ($templateCache) {
    $templateCache.put("template/popover/popover.html",
      "<div class=\"popover {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" +
          " <div class=\"\">\n" +
          " <div class=\"\" ng-bind-html=\"content | unsafe\"></div>\n" +
          " </div>\n" +
       "</div>\n" +
      "");
  }]);

  angular
    .module(modules.sectorTracker, [modules.bowerDependenciesCore, modules.common])
    .filter('unsafe', ['$sce', function ($sce) {
      return function (val) {
        return $sce.trustAsHtml(val);
      };
    }]);
}());