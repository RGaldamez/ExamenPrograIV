var ingredientController = require('./controllers/ingredientController');
var productController = require('./controllers/productController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');

exports.endpoints = [
	
	{method: 'GET', path: '/getIngredients', config: ingredientController.getIngredients},
	{method: 'GET', path: '/getIngredient/{identification}', config: ingredientController.getIngredient},
  {method: 'POST', path: '/postIngredient', config: ingredientController.postIngredient},
	{method: 'DELETE', path: '/deleteIngredient/{identification}', config: ingredientController.deleteIngredient},
	{method: 'POST', path: '/v1/register', config: usersController.createUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout},
	{method: 'GET', path: '/getProducts', config: productController.getProducts},
	{method: 'GET', path: '/getProduct/{identification}', config: productController.getProduct},
  {method: 'POST', path: '/postProduct', config: productController.postProduct},
	{method: 'DELETE', path: '/deleteProduct/{identification}', config: productController.deleteProduct}
	
];
