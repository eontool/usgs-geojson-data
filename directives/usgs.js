app.directive('usgsComponent', function($http){
  return{
    link: function($scope, element, attrs){

      let baseUrl = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/';
      let baseExt = '.geojson';
      $scope.baseSrc = 'all_day';

      $scope.getSource = function(){
        $scope.data = null;
        $http.get(baseUrl + $scope.baseSrc + baseExt).then(
          function(response){
            $scope.data = response.data;
            console.log(response);
          },
          function(error){
            console.log(error);
          }
        );
      };
      
      $scope.sortBy = function(propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
      };

      $scope.getSource();
    },
    restrict: 'E',
    templateUrl: 'views/table.html'
  }
});
