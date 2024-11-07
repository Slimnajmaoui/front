const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Groupe = new Schema({
  nom: { type: String },
  description: { type: String },
  etat: { type: String },
  datecreation: { type: String },
  datemodification: { type: String }


}, {
  collection: 'groupes'
})
  
module.exports = mongoose.model('Groupe', Groupe)