var ingredient = require('../schemas/ingredient');

exports.getIngredients = {

  
  handler: function(request, reply){
    var ingredients = ingredient.find({}).exec(function(err,Ingredients) {
      if(err){
        alert("Error");
      }else{
        
        console.log(Ingredients);
        return reply(ingredients);
      }
    });
  }
}



exports.getIngredient = {
  handler: function(request, reply){
    var ingredients = ingredient.find({isbn:request.params.isbn}).exec(function (err,Ingredient) {
      if(err){
        return reply.alert("No se encontro el libro");
      }else{
       return reply(ingredients); 
      }
    });
  }
}

exports.deleteIngredient = {

  handler: function(request, reply){
    var ingredients = ingredient.find({identification:request.params.identification});
    ingredients.remove().exec(function (err,ingredients) {
      if(err){
        alert("Error");
      }else{
        return reply("Deleted");    
      }
    });
  }
}

exports.postIngredient = {

  handler: function (request, reply) {
    ingredient.create(request.payload, function (err,ingredients) {
      if(err){
        return reply("Error");
      }else{
        console.log(ingredients);
        return reply("Posted");
      }
    });
  }
}


