var myApp = angular.module('myApp',[])

myApp.controller('jogo', function($scope){
	var selecao = 0
	var aux = 0
	$scope.porta = ''
	$scope.reseta = function(){
		location.reload(true)
	}
	$scope.porta = function(x){
		selecao = selecao+x
	}
	premio=Math.ceil(Math.random()*3)
	$scope.jogo = "Escolha uma porta"
	var pergunta = 0
	
	if(pergunta==0){
		$scope.jogar = function(){
			if(pergunta==0){
			if(premio == 1 || premio == 3){
				$scope.jogo = "Deseja Continuar?" 
				$scope.porta[2] = "M"
				pergunta++
				aux=selecao
			}else
			if(premio == 2 || premio == 1){
				$scope.jogo = "Deseja Continuar?"
				$scope.porta[3] = "M"
				pergunta++
				aux=selecao
			}else
			if(premio == 3 || premio == 2){
				$scope.jogo = "Deseja Continuar?"
				$scope.porta[1] = "M"
				pergunta++
				aux=selecao
			}
		}else if(pergunta == 1){
			if(selecao != aux){
			selecao=selecao-aux
		}
	if(premio == 1 && selecao == 1){
		$scope.porta[1] = "T"
		$scope.porta[2] = "M"
		$scope.porta[3] = "M"
		$scope.jogo = "Você ganhou"
	}else if(premio == 2 && selecao == 2){
		$scope.porta[1] = "M"
		$scope.porta[2] = "T"
		$scope.porta[3] = "M"
		$scope.jogo = "Você ganhou"
	}else if(premio == 3 && selecao == 3){
		$scope.porta[1] = "M"
		$scope.porta[2] = "M"
		$scope.porta[3] = "T"
		$scope.jogo = "Você ganhou"
	}else if(premio == 1 && selecao != 1){
		$scope.porta[1] = "T"
		$scope.porta[2] = "M"
		$scope.porta[3] = "M"
		$scope.jogo = "Você perdeu"
	}else if(premio == 2 && selecao != 2){
		$scope.porta[1] = "M"
		$scope.porta[2] = "T"
		$scope.porta[3] = "M"
		$scope.jogo = "Você perdeu"
	}else if(premio == 3 && selecao != 3){
		$scope.porta[1] = "M"
		$scope.porta[2] = "M"
		$scope.porta[3] = "T"
		$scope.jogo = "Você perdeu"
	}
}
}
}
})