const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SweetModel = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  amount: Number,
  type: String,
  // 'Cookie', 'Candy','Chocolate', 'Drink', 'Syrup'
  price: Number
}, { collection: 'sweets' });

module.exports = mongoose.model('Sweet', SweetModel);