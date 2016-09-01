angular.module("jogo", []).controller("velha", function($scope){
		$scope.tabuleiro = []
		var jogada = 0
		$scope.jogar = function(posicao){
			if(!$scope.tabuleiro[posicao]){
				$scope.tabuleiro[posicao] = $scope.quemJogaAgora
				jogada++
			}
		}
		$scope.quemJogaAgora = function(){
		    if(jogada %2 === 0){
		        return 'glyphon-tint'
		    }else{
		        return 'glyphon-fire'
		    }
		}
		$scope.limpar = function(){
			$scope.tabuleiro = []
		}
})
