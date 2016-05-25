var product = require('../schemas/product');

exports.getProducts = {

  
  handler: function(request, reply){
    var products = product.find({}).exec(function(err,Products) {
      if(err){
        alert("Error");
      }else{
        
        console.log(Products);
        return reply(Products);
      }
    });
  }
}


exports.getProduct = {
  handler: function(request, reply){
    var products = product.find({identification:request.params.identification}).exec(function (err,Product) {
      if(err){
        return reply.alert("No se encontro el libro");
      }else{
       return reply(products); 
      }
    });
  }
}

exports.deleteProduct = {

  handler: function(request, reply){
    var products = product.find({identification:request.params.identification});
    products.remove().exec(function (err,products) {
      if(err){
        alert("Error");
      }else{
        return reply("Deleted");    
      }
    });
  }
}

exports.postProduct = {

  handler: function (request, reply) {
    product.create(request.payload, function (err,products) {
      if(err){
        return reply("Error");
      }else{
        console.log(products);
        return reply("Posted");
      }
    });
  }
}


exports.deleteProducts = {
  handler: function(request,reply){
    var products = product.find({});
    products.remove().exec(function(err){
      if (err){
          console.log('immortal');
          return reply('immortal')  
      }else{
        console.log('R.I.P.');
        return reply('R.I.P.'); 
      }
    });
  }
}