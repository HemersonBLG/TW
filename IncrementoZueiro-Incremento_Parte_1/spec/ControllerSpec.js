describe('Incrementos', function() {
    beforeEach(module('myApp'));

    var $controller;
    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    var $scope, controller
    beforeEach(function() {
        $scope = {};
        controller = $controller('Incrementos', {
            $scope: $scope
        });
    });
	describe("testando click em opcoes", function(){
		it("verifica click no A", function(){
			$scope.incrementoA()
			expect($scope.simbolos).toEqual(['A'])
		})
		it("verifica click no B", function(){
			$scope.incrementoB()
			expect($scope.simbolos).toEqual(['B'])
		})
		it("verifica clicks alternados", function(){
			$scope.incrementoA()
			$scope.incrementoB()
			expect($scope.simbolos).toEqual(['A', 'B'])
		})
	})
	describe("apertando duas vezes", function(){
		it("verifica dois clicks no A", function(){
			$scope.incrementoA()
			$scope.incrementoA()
			expect($scope.vencedores).toEqual(["A ganhou"])
		})
		it("verifica dois clicks no B", function(){
			$scope.incrementoB()
			$scope.incrementoB()
			expect($scope.vencedores).toEqual(["B ganhou"])
		})
		it("verifica vitoria do A e vitoria do B", function(){
			$scope.incrementoA()
			$scope.incrementoA()
			$scope.incrementoB()
			$scope.incrementoB()
			expect($scope.vencedores).toEqual(["A ganhou","B ganhou"])
		})
		})
	})