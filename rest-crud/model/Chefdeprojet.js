const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Chefdeprojet = new Schema({
  email: { type: String },
  motdepasse: { type: String }


}, {
  collection: 'chefdeprojets'
})
  
module.exports = mongoose.model('Chefdeprojet', Chefdeprojet)