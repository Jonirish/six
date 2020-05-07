angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('splash', {
    url: '/page1',
    templateUrl: 'templates/splash.html',
    controller: 'splashCtrl'
  })

  .state('surveys', {
    url: '/page2',
    templateUrl: 'templates/surveys.html',
    controller: 'surveysCtrl'
  })

  .state('congrats', {
    url: '/page3',
    templateUrl: 'templates/congrats.html',
    controller: 'congratsCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});