angular.module('mpu', ['ui.bootstrap'])

// carta aberta
// http://forum-sinasempumt01.2347602.n4.nabble.com/file/n19/CARTA_ABERTA_AOS_PARLAMENTARES.pdf
  

.controller('mainController', ['$scope', '$http', function($scope, $http) {
    $scope.senadores = {};
    
    $http.get('/dados/senadores.json')
       .then(function(res){
          $scope.senadores = res.data;                
        }
    );
}]);