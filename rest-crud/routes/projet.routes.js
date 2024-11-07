const express = require('express');
const Projet = require('../model/Projet');
const projetRoute = express.Router();
  
/* Add Projet */
projetRoute.post('/projets/create', async (req, res, next) => {
  try {
    const projet = await Projet.create(req.body);
    res.json(projet);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Projets*/
projetRoute.get('/projets', async (req, res, next) => {
  try {
    const projets = await Projet.find();
    res.json(projets);
  } catch (error) {
    next(error);
  }
});
  
/* Get Projet by ID */
projetRoute.get('/projets/:id', async (req, res, next) => {
  try {
    const projet = await Projet.findById(req.params.id);
    res.json(projet);
  } catch (error) {
    next(error);
  }
});
  
/* Update Projet */
projetRoute.put('/projets/:id', async (req, res, next) => {
  try {
    const updatedProjet = await Projet.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedProjet);
  } catch (error) {
    next(error);
  }
});
  
/* Delete Projet */
projetRoute.delete('/projets/:id', async (req, res, next) => {
  try {
    const deletedProjet = await Projet.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Projet deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = projetRoute;