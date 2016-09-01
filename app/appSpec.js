describe('editable-item', function() {

  let scope,
      element,
      compiled,
      html;

  beforeEach(module('makeEditableApp'));
  beforeEach(module('makeEditable-template.html'));
  beforeEach(inject(function($rootScope, $compile) {

    let html='';
    html += '<div make-editable>';
    html += '<p>Labore aliqua proident id non laboris esse nisi.</p>';
    html += '</div>';

    scope = $rootScope.$new();
    compiled = $compile(html);
    element = compiled(scope);
    scope.$digest();

  }));
  it('should render the elements correctly', function() {
    expect(element.find('button').length).toBe(2);
    expect(element.find('button').attr('ng-click').toBeTruthy);
    expect(element.find('button').attr('ng-click').toBeFalsy);
    expect(element.find('button').attr('ng-show').toBeTruthy);
    expect(element.find('button').attr('ng-show').toBeFalsy);
    expect(element.find('div').attr('ng-init').toBeFalsy);
  });
});
