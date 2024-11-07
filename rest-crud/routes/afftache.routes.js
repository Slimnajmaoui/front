const express = require('express');
const Afftache = require('../model/Afftache');
const afftacheRoute = express.Router();
  
/* Add Afftache */
afftacheRoute.post('/afftaches/create', async (req, res, next) => {
  try {
    const afftache = await Afftache.create(req.body);
    res.json(afftache);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Afftaches*/
afftacheRoute.get('/afftaches', async (req, res, next) => {
  try {
    const afftaches = await Afftache.find();
    res.json(afftaches);
  } catch (error) {
    next(error);
  }
});
  
/* Get Afftache by ID */
afftacheRoute.get('/afftaches/:id', async (req, res, next) => {
  try {
    const afftache = await Afftache.findById(req.params.id);
    res.json(afftache);
  } catch (error) {
    next(error);
  }
});
  
/* Update Afftache */
afftacheRoute.put('/afftaches/:id', async (req, res, next) => {
  try {
    const updatedAfftache = await Afftache.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedAfftache);
  } catch (error) {
    next(error);
  }
});
  
/* Delete Afftache */
afftacheRoute.delete('/afftaches/:id', async (req, res, next) => {
  try {
    const deletedAfftache = await Afftache.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Afftache deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = afftacheRoute;