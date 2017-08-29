var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
  Name : String,
  Description : String,
  Price : Number,
});

var foodSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  Items : [itemSchema]
});

mongoose.model('Food', foodSchema, 'Food');