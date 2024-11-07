const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Avtache = new Schema({
  nom: { type: String },
  description: { type: String },
  datedebut: { type: String },
  datefin: { type: String },
  idprojet: { type: String },
  etat: { type: String },
  avancement: { type: String },
  datecreation: { type: String },
  datemodification: { type: String }


}, {
  collection: 'avtaches'
})
  
module.exports = mongoose.model('Avtache', Avtache)