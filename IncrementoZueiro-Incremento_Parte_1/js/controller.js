var myApp = angular.module('myApp',[]);

myApp.controller('Incrementos',  function($scope) {
	$scope.qtd1 = 0
	$scope.qtd2 = 0
	$scope.simbolos = []
	$scope.vencedores = []
	simbolo1 = 0
	simbolo2 = 0
	$scope.limpar = function (){
		$scope.simbolos = []
		$scope.vencedores = []
		$scope.resultado = ""
		$scope.qtd2 = 0
		$scope.qtd1 = 0
	}
	$scope.incrementoA = function(){
		$scope.qtd1++
		$scope.qtd2 = 0
		$scope.simbolos.push ('A')
			if($scope.qtd1 === 2){
			$scope.vencedores.push ("A ganhou")
			$scope.qtd2 = 0
			$scope.qtd1 = 0
			$scope.simbolos = []
			simbolo1 = simbolo1+1
		}
	}
	$scope.incrementoB = function(){
		$scope.qtd2++
		$scope.qtd1 = 0
		$scope.simbolos.push ('B')
		if($scope.qtd2 === 2){
			$scope.vencedores.push ("B ganhou")
			$scope.qtd2 = 0
			$scope.qtd1 = 0
			$scope.simbolos = []
			simbolo2 = simbolo2+1
		}
	}
	$scope.res = function(){
		if(simbolo1<simbolo2){
			$scope.resultado = "Simbolo B ganhou com = "+simbolo2
		}else{
			$scope.resultado = "Simbolo A ganhou com = "+simbolo1
		}
	}
		
});