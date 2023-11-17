const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate')
const Jean = new mongoose.Schema({
  userId:{
    type:String,
    required:true
  },
  brand:{
    type:String
  },
  name: {
    type: String
  },
  Rate: {
    type: Number
  },
  description: {
    type: String
  },
  code:{
    type:String,
    required:true
  },
  productImage: {
    type: Array
  },
  size: {
    type: Array
  },
  offer:{
    type:Number
  }
});
Jean.plugin(mongoosePaginate)
let products = module.exports = mongoose.model('jeans',Jean);