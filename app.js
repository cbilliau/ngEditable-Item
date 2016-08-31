var app = angular.module('makeEditableApp', []);

app.directive('makeEditable', function() {
  return {
    restrict: 'E',
    templateUrl: 'makeEditable-template.html',
    replace: true
  };
});
