const express = require('express');
const Avprojet = require('../model/Avprojet');
const avprojetRoute = express.Router();
  
/* Add Avprojet */
avprojetRoute.post('/avprojets/create', async (req, res, next) => {
  try {
    const avprojet = await Avprojet.create(req.body);
    res.json(avprojet);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Avprojets*/
avprojetRoute.get('/avprojets', async (req, res, next) => {
  try {
    const avprojets = await Avprojet.find();
    res.json(avprojets);
  } catch (error) {
    next(error);
  }
});
  
/* Get Avprojet by ID */
avprojetRoute.get('/avprojets/:id', async (req, res, next) => {
  try {
    const avprojet = await Avprojet.findById(req.params.id);
    res.json(avprojet);
  } catch (error) {
    next(error);
  }
});
  
/* Update Avprojet */
avprojetRoute.put('/avprojets/:id', async (req, res, next) => {
  try {
    const updatedAvprojet = await Avprojet.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedAvprojet);
  } catch (error) {
    next(error);
  }
});
  
/* Delete Avprojet */
avprojetRoute.delete('/avprojets/:id', async (req, res, next) => {
  try {
    const deletedAvprojet = await Avprojet.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Avprojet deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = avprojetRoute;