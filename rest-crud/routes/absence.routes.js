const express = require('express');
const Absence = require('../model/Absence');
const absenceRoute = express.Router();
  
/* Add Absence */
absenceRoute.post('/absences/create', async (req, res, next) => {
  try {
    const absence = await Absence.create(req.body);
    res.json(absence);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Absences*/
absenceRoute.get('/absences', async (req, res, next) => {
  try {
    const absences = await Absence.find();
    res.json(absences);
  } catch (error) {
    next(error);
  }
});
  
/* Get Absence by ID */
absenceRoute.get('/absences/:id', async (req, res, next) => {
  try {
    const absence = await Absence.findById(req.params.id);
    res.json(absence);
  } catch (error) {
    next(error);
  }
});
  
/* Update Absence */
absenceRoute.put('/absences/:id', async (req, res, next) => {
  try {
    const updatedAbsence = await Absence.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedAbsence);
  } catch (error) {
    next(error);
  }
});
  
/* Delete Absence */
absenceRoute.delete('/absences/:id', async (req, res, next) => {
  try {
    const deletedAbsence = await Absence.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Absence deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = absenceRoute;