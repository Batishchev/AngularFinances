/* jasmine specs for directives go here */

describe('tabs', function() {
   var compile;
   var rootScope;

   beforeEach(angular.mock.module('tabs'));

   beforeEach(inject(function(_$compile_, _$rootScope_) {
      compile = _$compile_;
      rootScope = _$rootScope_;
   }));

   it('creates no tabs', function() {
      var element = compile('<tabs></tabs>')(rootScope);
      rootScope.$digest();
      expect(element.children().eq(0).children().length).toBe(0);
   });

   it('creates 10 tabs', function() {
      var element = compile('<tabs><pane>test</pane><pane>test</pane><pane>test</pane><pane>test</pane><pane>test</pane><pane>test</pane><pane>test</pane><pane>test</pane><pane>test</pane><pane>test</pane></tabs>')(rootScope);
      rootScope.$digest();
      expect(element.children().eq(0).children().length).toBe(10);
   });

   it('checks whether tab name equals "unknown" if no attributes found', function() {
      var element = compile('<tabs><pane>test</pane></tabs>')(rootScope);
      rootScope.$digest();
      expect(element.children().eq(0).children().eq(0).children().eq(0).text()).toBe('unknown');
   });
});
