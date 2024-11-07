const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Competence = new Schema({
  nom: { type: String },
  description: { type: String },
  datecreation: { type: String },
  datemodification: { type: String }


}, {
  collection: 'competences'
})
  
module.exports = mongoose.model('Competence', Competence)