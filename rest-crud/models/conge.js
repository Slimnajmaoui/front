const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Conge = new Schema({
  titre: { type: String },
  description: { type: String },
  etat: { type: String },
  datedebut: { type: String },
  datefin: { type: String },
  datecreation: { type: String },
  datemodification: { type: String }


}, {
  collection: 'conges'
})
  
module.exports = mongoose.model('Conge', Conge)