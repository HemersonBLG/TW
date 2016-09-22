var myApp = angular.module('myApp',[]);

myApp.controller('Incrementos',  function($scope) {
	$scope.qtd1 = 0
	$scope.qtd2 = 0
	$scope.simbolos = []
	simbolos=[]
	$scope.incremento1 = function(){
		$scope.qtd1++
		$scope.simbolos.push ('0')
		if($scope.qtd1 === 10)
			("Ganhou")
	}
	$scope.incremento2 = function(){
		$scope.qtd2++
		$scope.simbolos.push ('+')
		if($scope.qtd2 === 10)
			("Ganhou")
	}
		
});