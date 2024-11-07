const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Absence = new Schema({
  titre: { type: String },
  description: { type: String },
  etat: { type: String },
  datedebut: { type: String },
  datefin: { type: String },
  datecreation: { type: String },
  datemodification: { type: String }


}, {
  collection: 'absences'
})
  
module.exports = mongoose.model('Absence', Absence)