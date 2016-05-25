var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  identification: {
    type: String,
    unique: true
  },
  name: String,
  description: String,
  ingredients: [String]
});

module.exports = mongoose.model('Product', ProductSchema);
