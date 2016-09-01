let app = angular.module('makeEditableApp', []);

app.directive('makeEditable', function() {
  return {
    restrict: 'A',
    transclude: true,
    templateUrl:  'makeEditable-template.html',
    scope: true,
    };
  });
