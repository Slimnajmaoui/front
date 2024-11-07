const express = require('express');
const Affgroupe = require('../model/Affgroupe');
const affgroupeRoute = express.Router();
  
/* Add Affgroupe */
affgroupeRoute.post('/affgroupes/create', async (req, res, next) => {
  try {
    const affgroupe = await Affgroupe.create(req.body);
    res.json(affgroupe);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Affgroupes*/
affgroupeRoute.get('/affgroupes', async (req, res, next) => {
  try {
    const affgroupes = await Affgroupe.find();
    res.json(affgroupes);
  } catch (error) {
    next(error);
  }
});
  
/* Get Affgroupe by ID */
affgroupeRoute.get('/affgroupes/:id', async (req, res, next) => {
  try {
    const affgroupe = await Affgroupe.findById(req.params.id);
    res.json(affgroupe);
  } catch (error) {
    next(error);
  }
});
  
/* Update Affgroupe */
affgroupeRoute.put('/affgroupes/:id', async (req, res, next) => {
  try {
    const updatedAffgroupe = await Affgroupe.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedAffgroupe);
  } catch (error) {
    next(error);
  }
});
  
/* Delete Affgroupe */
affgroupeRoute.delete('/affgroupes/:id', async (req, res, next) => {
  try {
    const deletedAffgroupe = await Affgroupe.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Affgroupe deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = affgroupeRoute;