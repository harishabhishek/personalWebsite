/**
 * Created by new on 5/17/15.
 */


var mainApp = angular.module('mainApp',[
    'ngRoute',
    'mainAppControllers',
    'ngAnimate'
]);

mainApp.config(['$routeProvider',
function($routeProvider){

    $routeProvider.when('/projects', {
       templateUrl: './partials/projects.html',
        controller: 'projectController'
    })

        .when('/courses', {
            templateUrl: './partials/courses.html',
            controller: 'courseController'
        })
        .when('/technology', {
            templateUrl: './partials/technology.html',
            controller: 'technologyController'
        })
        .otherwise({
            redirectTo: '/technology'
        }
    );

}]);


var funApp = angular.module('funApp',[
    'ngRoute',
    'funAppControllers',
    'ngAnimate'
]);


funApp.config(['$routeProvider',
    function($routeProvider){

        $routeProvider.when('/poems', {
            templateUrl: './partials/poems.html',
            controller: 'poemController'
        })
            .when('/hide', {
                templateUrl: './partials/hide.html',
                controller: 'hideController'
            })

            .otherwise({
                redirectTo: '/hide'
            }
        );

    }]);
