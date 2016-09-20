angular.module("jogo", []).controller("dados", function($scope) {
		$scope.quantidade = ""	  
	  $scope.sorteio = function(){
		$scope.dados = []
		$scope.resultado = 0
        for(var i=0; i < $scope.quantidade; i++){
			$scope.dados[i]= Math.ceil(Math.random() *6)
			$scope.resultado = $scope.resultado+$scope.dados[i]
		}
    }
})
