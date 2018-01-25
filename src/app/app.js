import angular from 'angular';
import animate from 'angular-animate';
import aria from 'angular-aria';
import messages from 'angular-messages';
import ngMaterial from 'angular-material';
import uirouter from '@uirouter/angularjs'
import core from './core/index.js';

angular.module('app', [
    'ngMaterial',
    'ui.router',
    'core'
])
.config(config)
.run(run);


function config($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            template: require('./views/dashboard.html'),
            controller: "DashboardController as dashboard",
        })
}
function run(){}