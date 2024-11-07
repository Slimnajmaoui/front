const express = require('express');
const Competence = require('../model/Competence');
const competenceRoute = express.Router();
  
/* Add Competence */
competenceRoute.post('/competences/create', async (req, res, next) => {
  try {
    const competence = await Competence.create(req.body);
    res.json(competence);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Competences*/
competenceRoute.get('/competences', async (req, res, next) => {
  try {
    const competences = await Competence.find();
    res.json(competences);
  } catch (error) {
    next(error);
  }
});
  
/* Get Competence by ID */
competenceRoute.get('/competences/:id', async (req, res, next) => {
  try {
    const competence = await Competence.findById(req.params.id);
    res.json(competence);
  } catch (error) {
    next(error);
  }
});
  
/* Update Competence */
competenceRoute.put('/competences/:id', async (req, res, next) => {
  try {
    const updatedCompetence = await Competence.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedCompetence);
  } catch (error) {
    next(error);
  }
});
  
/* Delete Competence */
competenceRoute.delete('/competences/:id', async (req, res, next) => {
  try {
    const deletedCompetence = await Competence.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Competence deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = competenceRoute;