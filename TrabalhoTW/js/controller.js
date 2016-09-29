var myApp = angular.module('myApp',[])

myApp.controller('jogo', function($scope){
	var selecao = 1
	$scope.jogo = "Selecione uma Porta"
	$scope.porta1 = "xxxxxxx"
	$scope.porta2 = "xxxxxxx"
	$scope.porta3 = "xxxxxxx"
	pergunta = 0
	premio=Math.ceil(Math.random()*3)

	if(pergunta==0){
		$scope.jogar = function(){
			console.log(selecao)
			console.log(premio)
			if(pergunta==0){
			if(premio == 1 || premio == 3){
				$scope.jogo = "Deseja Continuar?" 
				$scope.porta2 = "Macaco"
				pergunta++
			}else
			if(premio == 2 || premio == 1){
				$scope.jogo = "Deseja Continuar?"
				$scope.porta3 = "Macaco"
				pergunta++
			}else
			if(premio == 3 || premio == 2){
				$scope.jogo = "Deseja Continuar?"
				$scope.porta1 = "Macaco"
				pergunta++
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