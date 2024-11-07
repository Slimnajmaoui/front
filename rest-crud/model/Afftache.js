const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Afftache = new Schema({
  nom: { type: String },
  description: { type: String },
  datedebut: { type: String },
  datefin: { type: String },
  idprojet: { type: String },
  etat: { type: String },
  iduser: { type: String },
  datecreation: { type: String },
  datemodification: { type: String }


}, {
  collection: 'afftaches'
})
  
module.exports = mongoose.model('Afftache', Afftache)