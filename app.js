'esversion: 6';

var app = angular.module('makeEditableApp', []);

app.directive('makeEditable', function() {
  return {
    restrict: 'A',
    transclude: true,
    templateUrl: 'makeEditable-template.html',
    replace: false,
    scope: true,
    link: function(scope, element, attrs) {
      let textToEdit = element.find('p')[0];
      scope.change = {
        edit: function() {
          console.log(textToEdit);
        }
      };

      }
    };
  });
