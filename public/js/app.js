
function MyController($scope, $http) {

  $scope.teams = [
    { name:'oilers', shade:'dark' },
    { name:'flames', shade:'light' },
    { name:'blackhawks', shade:'light' }
  ];

  $scope.players = []
  $scope.team = $scope.teams[2];

  $scope.change = function(){
    $http.get("http://localhost:9001/" + $scope.team.name).success(function(players){
      console.log(JSON.stringify(players))
      $scope.players = players;
    })
  }

  $scope.change()

}
