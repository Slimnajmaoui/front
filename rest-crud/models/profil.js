const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Profil = new Schema({
  nom: { type: String },
  prenom: { type: String },
  diplome: { type: String },
  experience: { type: String },
  niveau: { type: String },
  etat: { type: String },
  datecreation: { type: String },
  datemodification: { type: String }


}, {
  collection: 'profils'
})
  
module.exports = mongoose.model('Profil', Profil)