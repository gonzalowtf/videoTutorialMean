// en models
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
 
var Car = new Schema({
  model:    { type: String, require: true },
  colour:     {type :String},
  type:     { type: String, 
              enum: [' vary small', 'small','medium', 'big','very big'],
              require: true 
            },
  features : {type: String ,require: true},            
  price :   { type: Number, require: true }
  
  
  
  });   
  
 
Car.path('model').validate(function (v) {
    return ((v !== "") && (v !== null));
});


module.exports = mongoose.model('Car', Car);



