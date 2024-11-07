const express = require('express');
const Tache = require('../model/Tache');
const tacheRoute = express.Router();
  
/* Add Tache */
tacheRoute.post('/taches/create', async (req, res, next) => {
  try {
    const tache = await Tache.create(req.body);
    res.json(tache);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Taches*/
tacheRoute.get('/taches', async (req, res, next) => {
  try {
    const taches = await Tache.find();
    res.json(taches);
  } catch (error) {
    next(error);
  }
});
  
/* Get Tache by ID */
tacheRoute.get('/taches/:id', async (req, res, next) => {
  try {
    const tache = await Tache.findById(req.params.id);
    res.json(tache);
  } catch (error) {
    next(error);
  }
});
  
/* Update Tache */
tacheRoute.put('/taches/:id', async (req, res, next) => {
  try {
    const updatedTache = await Tache.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedTache);
  } catch (error) {
    next(error);
  }
});
  
/* Delete Tache */
tacheRoute.delete('/taches/:id', async (req, res, next) => {
  try {
    const deletedTache = await Tache.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Tache deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = tacheRoute;