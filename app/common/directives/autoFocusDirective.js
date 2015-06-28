(function (module) {
  'use strict';
  // http://stackoverflow.com/questions/14833326/how-to-set-focus-on-input-field
  module.directive(autoFocus.name, autoFocus);

  autoFocus.$inject = ['$timeout'];

  function autoFocus($timeout) {
    return {
      restrict: 'AC',
      link: function (scope, element) {
        $timeout(function () {
          element[0].focus();
        }, 0);
      }
    };
  }
}(angular.module(modules.common)));