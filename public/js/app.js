
function MyController($scope, $http) {

  $scope.teams = [
    { name:'oilers' },
    { name:'flames' },
    { name:'blackhawks' },
    { name:'kings' }
  ];

  $scope.players = []
  $scope.team = $scope.teams[2];

  $scope.change = function(){
    $http.get("http://nhl.chloi.io/" + $scope.team.name).success(function(players){
      console.log(JSON.stringify(players))
      $scope.players = players;
    })
  }

  $scope.change()

}
