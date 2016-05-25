var mongoose = require('mongoose');

var IngredientSchema = new mongoose.Schema({
  identification: {
    type: String,
    unique: true
  },
  name: String,
  description: String  
});

module.exports = mongoose.model('Ingredient', IngredientSchema);
