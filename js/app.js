//imdbApp.run(function($rootScope) {
//    $rootScope.$on('$viewContentLoaded', function () {
//        $(document).foundation();
//    });
//});
//
//imdbAppG.run(function($rootScope) {
//    $rootScope.$on('$viewContentLoaded', function () {
//        $(document).foundation();
//    });
//});




var mainApp = angular.module('mainApp',[
    'ngRoute',
    'mainAppControllers',
    'ngAnimate'
]);

//mainApp.run(function($rootScope) {
//    $rootScope.$on('$viewContentLoaded', function () {
//        $(document).foundation();
//    });
//});

mainApp.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
            when('/list',{
            templateUrl: './partials/list.html',
            controller: 'listController2'
        }).
            when('/gallery', {
            templateUrl: './partials/gallery.html',
            controller: 'galleryController2'
        }).when('/details/:id', {
                templateUrl: './partials/details.html',
                controller: 'detailsController2'
         }).
            when('/extraCredit', {
                templateUrl: './partials/newView.html',
                controller: 'extraController2'
            }).
            when('/newData', {
                templateUrl: './partials/csAirRoutes.html',
                controller: 'csAirAppControllers'
            }).
            otherwise({
            redirectTo: '/list'
        });

    }
]);
