const express = require('express');
const Conge = require('../model/Conge');
const congeRoute = express.Router();
  
/* Add Conge */
congeRoute.post('/conges/create', async (req, res, next) => {
  try {
    const conge = await Conge.create(req.body);
    res.json(conge);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Conges*/
congeRoute.get('/conges', async (req, res, next) => {
  try {
    const conges = await Conge.find();
    res.json(conges);
  } catch (error) {
    next(error);
  }
});
  
/* Get Conge by ID */
congeRoute.get('/conges/:id', async (req, res, next) => {
  try {
    const conge = await Conge.findById(req.params.id);
    res.json(conge);
  } catch (error) {
    next(error);
  }
});
  
/* Update Conge */
congeRoute.put('/conges/:id', async (req, res, next) => {
  try {
    const updatedConge = await Conge.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedConge);
  } catch (error) {
    next(error);
  }
});
  
/* Delete Conge */
congeRoute.delete('/conges/:id', async (req, res, next) => {
  try {
    const deletedConge = await Conge.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Conge deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = congeRoute;