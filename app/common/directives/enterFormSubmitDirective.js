(function (module) {
  'use strict';
  // http://stackoverflow.com/questions/15417125/submit-form-on-pressing-enter-with-angularjs
  module.directive(ngEnter.name, ngEnter);

  function ngEnter() {
    return function (scope, element, attrs) {
      element.bind("keydown keypress", function (event) {
        if (event.which === 13) {
          scope.$apply(function () {
            scope.$eval(attrs.ngEnter, { 'event': event });
          });

          event.preventDefault();
        }
      });
    };
  }
}(angular.module(modules.common)));