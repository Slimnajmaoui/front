const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Tache = new Schema({
  nom: { type: String },
  description: { type: String },
  datedebut: { type: String },
  datefin: { type: String },
  idprojet: { type: String },
  etat: { type: String },
  datecreation: { type: String },
  datemodification: { type: String }


}, {
  collection: 'taches'
})
  
module.exports = mongoose.model('Tache', Tache)