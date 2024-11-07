const express = require('express');
const Profil = require('../model/Profil');
const profilRoute = express.Router();
  
/* Add Profil */
profilRoute.post('/profils/create', async (req, res, next) => {
  try {
    const profil = await Profil.create(req.body);
    res.json(profil);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Profils*/
profilRoute.get('/profils', async (req, res, next) => {
  try {
    const profils = await Profil.find();
    res.json(profils);
  } catch (error) {
    next(error);
  }
});
  
/* Get Profil by ID */
profilRoute.get('/profils/:id', async (req, res, next) => {
  try {
    const profil = await Profil.findById(req.params.id);
    res.json(profil);
  } catch (error) {
    next(error);
  }
});
  
/* Update Profil */
profilRoute.put('/profils/:id', async (req, res, next) => {
  try {
    const updatedProfil = await Profil.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedProfil);
  } catch (error) {
    next(error);
  }
});
  
/* Delete Profil */
profilRoute.delete('/profils/:id', async (req, res, next) => {
  try {
    const deletedProfil = await Profil.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Profil deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = profilRoute;