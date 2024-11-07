const express = require('express');
const Groupe = require('../model/Groupe');
const groupeRoute = express.Router();
  
/* Add Groupe */
groupeRoute.post('/groupes/create', async (req, res, next) => {
  try {
    const groupe = await Groupe.create(req.body);
    res.json(groupe);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Groupes*/
groupeRoute.get('/groupes', async (req, res, next) => {
  try {
    const groupes = await Groupe.find();
    res.json(groupes);
  } catch (error) {
    next(error);
  }
});
  
/* Get Groupe by ID */
groupeRoute.get('/groupes/:id', async (req, res, next) => {
  try {
    const groupe = await Groupe.findById(req.params.id);
    res.json(groupe);
  } catch (error) {
    next(error);
  }
});
  
/* Update Groupe */
groupeRoute.put('/groupes/:id', async (req, res, next) => {
  try {
    const updatedGroupe = await Groupe.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedGroupe);
  } catch (error) {
    next(error);
  }
});
  
/* Delete Groupe */
groupeRoute.delete('/groupes/:id', async (req, res, next) => {
  try {
    const deletedGroupe = await Groupe.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Groupe deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = groupeRoute;