app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/foo');

  $stateProvider
    .state('foo', {
      url: '/foo',
      templateUrl: 'partials/foo.html',
      controller: 'FooController'
    });
}]);
