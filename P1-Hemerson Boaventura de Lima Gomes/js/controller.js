var myApp = angular.module('myApp',[]);

myApp.controller('Incrementos',  function($scope) {
	qtd1 = 0
	qtd2 = 0
	qtd3 = 0
	qtd4 = 0
	qtd5 = 0
	$scope.qtdGeral = 0
	$scope.ganhador = ""
	
	$scope.incremento1 = function(){
		qtd1++
		$scope.qtdGeral++
	}
	
	$scope.incremento2 = function(){
		qtd2++
		$scope.qtdGeral++
	}
	
	$scope.incremento3 = function(){
		qtd3++
		$scope.qtdGeral++
	}
	$scope.incremento4 = function(){
		qtd4++
		$scope.qtdGeral++
	}
	$scope.incremento5 = function(){
		qtd5++
		$scope.qtdGeral++
	}

	$scope.res = function(){
		$scope.qtd1 = Math.ceil((qtd1/$scope.qtdGeral)*100)
		$scope.qtd2 = Math.ceil((qtd2/$scope.qtdGeral)*100)
		$scope.qtd3 = Math.ceil((qtd3/$scope.qtdGeral)*100)
		$scope.qtd4 = Math.ceil((qtd4/$scope.qtdGeral)*100)
		$scope.qtd5 = Math.ceil((qtd5/$scope.qtdGeral)*100)
		if(qtd1>qtd2 && qtd1>qtd3 && qtd1>qtd4 && qtd1>qtd5){
			$scope.ganhador = "Alexandre"
		}
		if(qtd2>qtd1 && qtd2>qtd3 && qtd2>qtd4 && qtd2>qtd5){
			$scope.ganhador = "Gilberto"
		}
		if(qtd3>qtd1 && qtd3>qtd2 && qtd3>qtd4 && qtd4>qtd5){
			$scope.ganhador = "Gilmar"
		}
		if(qtd4>qtd1 && qtd4>qtd2 && qtd4>qtd3 && qtd4>qtd5){
			$scope.ganhador = "Maria"
		}
		if(qtd5>qtd1 && qtd5>qtd2 && qtd5>qtd3 && qtd5>qtd4){
			$scope.ganhador = "Odelmo"
		}
	}
	
});