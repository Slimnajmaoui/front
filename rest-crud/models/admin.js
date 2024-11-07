const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Admin = new Schema({
  email: { type: String },
  motdepasse: { type: String }


}, {
  collection: 'admins'
})
  
module.exports = mongoose.model('Admin', Admin)