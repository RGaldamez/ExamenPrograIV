angular.module('AngularScaffold.Services').factory('productService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000';
		return {
				GetProducts: function(){
					return $http.get(baseUrl + "/getProducts");
				},
				PostProduct: function(payload){
					return $http.post(baseUrl + "/postProduct", payload);
				},
                DeleteProduct: function(payload) {
                    return $http.delete(baseUrl + '/deleteProduct/'+payload);
                }
	    };
}]);
