angular
	.module('guruApp')
	.controller('CreateButtonController', ['$http',
		function($http){
			var ctrl = this;
			ctrl.$onInit()
			ctrl.create = function() {
				$http.post('/api/buttons', ctrl.name, ctrl.phrase)
				.success(function(name,phrase) {
					//$scope.formData = {}; // clear the form so our user is ready to enter another
					$scope.buttons = [name,phrase];
					console.log([name,phrase]);
            });
				
		}
		]);
