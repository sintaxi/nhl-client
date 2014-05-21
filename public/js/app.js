
function MyController($scope, $http) {

  $scope.teams = [
    { name:'oilers' },
    { name:'flames' },
    { name:'blackhawks' },
    { name:'kings' }
  ];

  $scope.seasons = [
    { years: "20132014" },
    { years: "20122013" },
    { years: "20112012" },
    { years: "20102011" },
    { years: "20092010" },
    { years: "20082009" }
  ]

  $scope.players = []

  $scope.team = $scope.teams[2];
  $scope.season = $scope.seasons[0];

  $scope.change = function(){
    $http.get("http://nhl.chloi.io/" + $scope.team.name +"/"+ $scope.season.years).success(function(players){
      console.log(JSON.stringify(players))
      $scope.players = players;
    })
  }

  $scope.change()

}
