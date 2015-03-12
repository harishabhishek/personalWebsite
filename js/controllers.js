

var mainAppControllers = angular.module('mainAppControllers', []);


mainAppControllers.controller('listController2',['$scope', '$http',

    function($scope, $http){
        $scope.movies = [];

        $http.get('./data/imdb250.json').success(function (response){
            $scope.movies = response;
            //console.log($scope.movies);
        });
    }

]);


mainAppControllers.controller('galleryController2',['$scope', '$http', '$location',
    function($scope, $http, $location){
        $scope.movies = [];
        $scope.genres = [];
        tempArr = [];

        $http.get('./data/imdb250.json').success(function (response){
            $scope.movies = response;


            temp = 0;
            for(itr = 0; itr < response.length; itr++){
                ArrGenres = (response[itr]["genre"]);
                for(j = 0; j<ArrGenres.length; j++){
                    if($scope.genres.indexOf(ArrGenres[j]) < 0){
                        $scope.genres.push(ArrGenres[j]);
                    }
                }
            }

            $scope.genres.sort();
            //console.log($scope.genres);

            $scope.filter='';
        });

        $scope.alert = function(param){
            $scope.filter = param;
        };
    }

]);

mainAppControllers.controller('detailsController2',['$scope', '$http','$routeParams',

    function($scope, $http, $routeParams){
        $scope.movies = [];
        $scope.id = $routeParams.id;
        $scope.selectedMovie = {};
        intVal = parseInt($scope.id);
        prev = intVal - 1;
        next = intVal + 1;
        if(prev<1){
            prev=250
        }
        if(next>250){
            next = 1;
        }
        $scope.prevLink = "#/details/"+prev;
        $scope.nextLink = "#/details/"+next;

        console.log($scope.id);
        //console.log($scope.prevLink);
        //console.log($scope.nextLink);

        $http.get('./data/imdb250.json').success(function (response){
            $scope.movies = response;

            for(itr = 0 ; itr < $scope.movies.length; itr++ ){
                val = $scope.movies[itr];
                if(val['rank'] == $scope.id){
                    $scope.selectedMovie = $scope.movies[itr];

                }
            }
        });

    }

]);

mainAppControllers.controller('extraController2',['$scope', '$http',

    function($scope, $http){
        $scope.movies = {};
        $scope.languages={};
        $scope.genres = {};
        $scope.actors = {};
        $scope.directors= {};
        $scope.actorAverage = {};

        $http.get('./data/imdb250.json').success(function (response){
            $scope.movies = response;



            for(itr = 0; itr < response.length; itr++){

                //Language
                tempVal = response[itr]["language"];
                for(j = 0; j < tempVal.length; j++ ){

                    if(tempVal[j] in $scope.languages){
                        $scope.languages[tempVal[j]]+= 1;
                    }
                    else{
                        $scope.languages[tempVal[j]] = 1;
                    }
                }//Language End

                //Actors
                tempVal = response[itr]["actors"];
                for(j = 0; j < tempVal.length; j++ ){

                    if(tempVal[j] in $scope.actors){
                        $scope.actors[tempVal[j]]+= 1;
                    }
                    else{
                        $scope.actors[tempVal[j]] = 1;
                    }
                }//Actors End

                //Directors
                tempVal = response[itr]["director"];
                for(j = 0; j < tempVal.length; j++ ){

                    if(tempVal[j] in $scope.directors){
                        $scope.directors[tempVal[j]]+= 1;
                    }
                    else{
                        $scope.directors[tempVal[j]] = 1;
                    }
                }//Directors End

                //genres
                tempVal = response[itr]["genre"];
                for(j = 0; j < tempVal.length; j++ ){

                    if(tempVal[j] in $scope.genres){
                        $scope.genres[tempVal[j]]+= 1;
                    }
                    else{
                        $scope.genres[tempVal[j]] = 1;
                    }
                }//Directors End
            }

            //langiuage Start
            var languages = [];

            Object.keys($scope.languages)
                .map(function (k) { return [k, $scope.languages[k]]; })
                .sort(function (a, b) {
                    if (a[1] < b[1]) return -1;
                    if (a[1] > b[1]) return 1;
                    return 0;
                })
                .forEach(function (d) {
                    languages.push(d[0]);
                    //console.log(d[1]);
                });

            languages.reverse();
            console.log(languages[0]);
            console.log(languages[1]);
            console.log(languages[2]);

            $scope.lanCount = $scope.languages;
            console.log($scope.lanCount)
            $scope.languages= languages;
            //Language End

            //Actors Start
            var actors = [];

            Object.keys($scope.actors)
                .map(function (k) { return [k, $scope.actors[k]]; })
                .sort(function (a, b) {
                    if (a[1] < b[1]) return -1;
                    if (a[1] > b[1]) return 1;
                    return 0;
                })
                .forEach(function (d) {
                    actors.push(d[0]);
                });

            actors.reverse();
            console.log(actors[0]);
            console.log(actors[1]);
            console.log(actors[2]);

            $scope.accCount = $scope.actors;
            console.log($scope.accCount)
            $scope.actors= actors;
            //Actors End

            //Director Start
            var directors = [];

            Object.keys($scope.directors)
                .map(function (k) { return [k, $scope.directors[k]]; })
                .sort(function (a, b) {
                    if (a[1] < b[1]) return -1;
                    if (a[1] > b[1]) return 1;
                    return 0;
                })
                .forEach(function (d) {
                    directors.push(d[0]);
                });

            directors.reverse();
            console.log(directors[0]);
            console.log(directors[1]);
            console.log(directors[2]);

            $scope.dirCount = $scope.directors;
            console.log($scope.dirCount)
            $scope.directors= directors;
            //Director End

            //Director Start
            var genres = [];

            Object.keys($scope.genres)
                .map(function (k) { return [k, $scope.genres[k]]; })
                .sort(function (a, b) {
                    if (a[1] < b[1]) return -1;
                    if (a[1] > b[1]) return 1;
                    return 0;
                })
                .forEach(function (d) {
                    genres.push(d[0]);
                });

            genres.reverse();
            console.log(genres[0]);
            console.log(genres[1]);
            console.log(genres[2]);

            $scope.genCount = $scope.genres;
            console.log($scope.genCount)
            $scope.genres= genres;
            //Director End

        });
    }

]);


//EC Part A

//var csAirAppControllers = angular.module('csAirAppControllers', []);

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

mainAppControllers.controller('csAirAppControllers',['$scope', '$http',

    function($scope, $http){
        $scope.cityCodes = [];
        tempArr = [];
        $scope.routes = {};

        $scope.cityToCode = [];

        $scope.hideIt = true;

        $http.get('./data/map_data.json').success(function (response){


            citiesAre = response["metros"];
            for(itr = 0; itr<citiesAre.length; itr++){
                $scope.cityCodes[citiesAre[itr]["code"]] = citiesAre[itr]["name"];
                $scope.cityToCode[citiesAre[itr]["name"]] = $scope.cityToCode[citiesAre[itr]["code"]];
            }

            $scope.cityToCode.sort();

            //Link Start



            Allroutes = response["routes"];

            for(itr = 0; itr< Allroutes.length; itr++){
                eachRoute = Allroutes[itr];
                flight = eachRoute["ports"];
                from = flight[0];
                to = flight[1];

                if(! (from in tempArr)){
                    tempArr.push(from);
                }
                if(! (to in tempArr)){
                    tempArr.push(to);
                }

                if(from in $scope.routes){
                    retVal = $scope.routes[from];
                    retVal.push(to);
                    $scope.routes[from] = retVal;
                }
                else{
                    retVal = [];
                    retVal.push(to);
                    $scope.routes[from] = retVal;
                }

                if(to in $scope.routes){
                    retVal = $scope.routes[to];
                    retVal.push(from);
                    $scope.routes[to] = retVal;
                }
                else{
                    retVal = [];
                    retVal.push(from);
                    $scope.routes[to] = retVal;
                }
            }

            $scope.codes = tempArr.filter(onlyUnique);
            $scope.codes.sort();
            console.log($scope.codes);
            console.log($scope.routes);


        });

        //Additional Stuff Here
    }

]);