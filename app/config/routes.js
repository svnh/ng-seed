app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('foo', {
      url: '/foo',
      templateUrl: 'partials/foo.html'
    });
}]);
