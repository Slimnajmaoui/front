const express = require('express');
const Admin = require('../model/Admin');
const adminRoute = express.Router();
  
/* Add Admin */
adminRoute.post('/admins/create', async (req, res, next) => {
  try {
    const admin = await Admin.create(req.body);
    res.json(admin);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Admins*/
adminRoute.get('/admins', async (req, res, next) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    next(error);
  }
});
  
/* Get Admin by ID */
adminRoute.get('/admins/:id', async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.params.id);
    res.json(admin);
  } catch (error) {
    next(error);
  }
});
  
/* Update Admin */
adminRoute.put('/admins/:id', async (req, res, next) => {
  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedAdmin);
  } catch (error) {
    next(error);
  }
});
  
/* Delete Admin */
adminRoute.delete('/admins/:id', async (req, res, next) => {
  try {
    const deletedAdmin = await Admin.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Admin deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = adminRoute;