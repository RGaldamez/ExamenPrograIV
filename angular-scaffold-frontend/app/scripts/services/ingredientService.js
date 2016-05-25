angular.module('AngularScaffold.Services').factory('ingredientService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000';
		return {
				GetIngredients: function(){
					return $http.get(baseUrl + "/getIngredients");
				},
				PostIngredient: function(payload){
					return $http.post(baseUrl + "/postIngredient", payload);
				},
                DeleteIngredient: function(payload) {
                    return $http.delete(baseUrl + '/deleteIngredient/'+payload);
                },
                GetIngredient: function(payload){
					return $http.get(baseUrl + "/getIngredients/"+payload);
				}
                
	    };
}]);
