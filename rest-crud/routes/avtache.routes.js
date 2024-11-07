const express = require('express');
const Avtache = require('../model/Avtache');
const avtacheRoute = express.Router();
  
/* Add Avtache */
avtacheRoute.post('/avtaches/create', async (req, res, next) => {
  try {
    const avtache = await Avtache.create(req.body);
    res.json(avtache);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Avtaches*/
avtacheRoute.get('/avtaches', async (req, res, next) => {
  try {
    const avtaches = await Avtache.find();
    res.json(avtaches);
  } catch (error) {
    next(error);
  }
});
  
/* Get Avtache by ID */
avtacheRoute.get('/avtaches/:id', async (req, res, next) => {
  try {
    const avtache = await Avtache.findById(req.params.id);
    res.json(avtache);
  } catch (error) {
    next(error);
  }
});
  
/* Update Avtache */
avtacheRoute.put('/avtaches/:id', async (req, res, next) => {
  try {
    const updatedAvtache = await Avtache.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedAvtache);
  } catch (error) {
    next(error);
  }
});
  
/* Delete Avtache */
avtacheRoute.delete('/avtaches/:id', async (req, res, next) => {
  try {
    const deletedAvtache = await Avtache.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Avtache deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = avtacheRoute;