const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Affgroupe = new Schema({
  nom: { type: String },
  description: { type: String },
  etat: { type: String },
  iduser: { type: String },
  datecreation: { type: String },
  datemodification: { type: String }

}, {
  collection: 'affgroupes'
})
  
module.exports = mongoose.model('Affgroupe', Affgroupe)