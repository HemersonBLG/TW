var myApp = angular.module('myApp',[])
myApp.controller('jogo', function($scope){
	$scope.jogo = ['1', '1', '1']
	for(var i = 1; i<4; i++){
	$scope.jogo = [i]
	}
	var selecao = 0
	premio=Math.ceil(Math.random()*3)
	var pergunta = 0
	if(pergunta == 0){
		$scope.jogar = function(){
			console.log(selecao)
			console.log(premio)
			if(pergunta == 0){
			if(premio == 1 || premio == 3){
				$scope.jogo = "Deseja Continuar?" 
				pergunta++				
				return 'Macaco'
			}else
			if(premio == 2 || premio == 1){
				$scope.jogo = "Deseja Continuar?"
				pergunta++
				return 'Macaco'
			
			}else
			if(premio == 3 || premio == 2){
				$scope.jogo = "Deseja Continuar?"
				pergunta++
				return 'Macaco' 
			}
		}else if(pergunta == 1)
	if(premio == 1 && selecao == 1){
		$scope.porta1 = "Tesouro"
		$scope.porta2 = "Macaco"
		$scope.porta3 = "Macaco"
		$scope.jogo = "Você ganhou"
	}else if(premio == 2 && selecao == 2){
		$scope.porta1 = "Macaco"
		$scope.porta2 = "Tesouro"
		$scope.porta3 = "Macaco"
		$scope.jogo = "Você ganhou"
	}else if(premio == 3 && selecao == 3){
		$scope.porta1 = "Macaco"
		$scope.porta2 = "Macaco"
		$scope.porta3 = "Tesouro"
		$scope.jogo = "Você ganhou"
	}else if(premio == 1 && selecao != 1){
		$scope.porta1 = "Tesouro"
		$scope.porta2 = "Macaco"
		$scope.porta3 = "Macaco"
		$scope.jogo = "Você perdeu"
	}else if(premio == 2 && selecao != 2){
		$scope.porta1 = "Macaco"
		$scope.porta2 = "Tesouro"
		$scope.porta3 = "Macaco"
		$scope.jogo = "Você perdeu"
	}else if(premio == 3 && selecao != 3){
		$scope.porta1 = "Macaco"
		$scope.porta2 = "Macaco"
		$scope.porta3 = "Tesouro"
		$scope.jogo = "Você perdeu"
	}
	

	}
  }
})