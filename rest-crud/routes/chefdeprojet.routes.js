const express = require('express');
const Chefdeprojet = require('../model/Chefdeprojet');
const chefdeprojetRoute = express.Router();
  
/* Add Chefdeprojet */
chefdeprojetRoute.post('/chefdeprojets/create', async (req, res, next) => {
  try {
    const chefdeprojet = await Chefdeprojet.create(req.body);
    res.json(chefdeprojet);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Chefdeprojets*/
chefdeprojetRoute.get('/chefdeprojets', async (req, res, next) => {
  try {
    const chefdeprojets = await Chefdeprojet.find();
    res.json(chefdeprojets);
  } catch (error) {
    next(error);
  }
});
  
/* Get Chefdeprojet by ID */
chefdeprojetRoute.get('/chefdeprojets/:id', async (req, res, next) => {
  try {
    const chefdeprojet = await Chefdeprojet.findById(req.params.id);
    res.json(chefdeprojet);
  } catch (error) {
    next(error);
  }
});
  
/* Update Chefdeprojet */
chefdeprojetRoute.put('/chefdeprojets/:id', async (req, res, next) => {
  try {
    const updatedChefdeprojet = await Chefdeprojet.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedChefdeprojet);
  } catch (error) {
    next(error);
  }
});
  
/* Delete Chefdeprojet */
chefdeprojetRoute.delete('/chefdeprojets/:id', async (req, res, next) => {
  try {
    const deletedChefdeprojet = await Chefdeprojet.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Chefdeprojet deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = chefdeprojetRoute;