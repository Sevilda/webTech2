const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserModel = new Schema({
  name: String,
  password: String
}, { collection: 'users' });

module.exports = mongoose.model('User', UserModel);