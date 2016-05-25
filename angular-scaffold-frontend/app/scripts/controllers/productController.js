angular.module('AngularScaffold.Controllers')
  .controller('productController', ['$scope', 'productService', '$sessionStorage', function ($scope, productService, $sessionStorage) {
    	$scope.title = "Tabla de Juegos."
      $scope.products = [];
      $scope.product = {};

      $scope.GetProducts = function(){
        productService.GetProducts().then(function(response){
          $scope.products = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.PostProduct = function(){
        console.log('ke ondas raza');
        productService.PostProduct($scope.product).then(function(response){
          alert("Posted to products");
          $scope.GetProducts();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }
      
      
      $scope.DeleteProduct = function (params) {
        productService.DeleteProduct(params).then(function (params) {
          alert("Product Deleted");
          $scope.GetProducts();
        }).catch(function (err) {
          alert(err.data.error + " " + err.data.message);
        });
      }

 

      $scope.isAdmin = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
      }

      $scope.isRegular = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('regular') > -1;
      }
      
      $scope.isRokr = function() {
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('rokr') > -1;
      }

  }]);
