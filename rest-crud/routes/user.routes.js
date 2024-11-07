const express = require('express');
const User = require('../model/User');
const userRoute = express.Router();
  
/* Add User */
userRoute.post('/users/create', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Users*/
userRoute.get('/users', async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});
  
/* Get User by ID */
userRoute.get('/users/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});
  
/* Update User */
userRoute.put('/users/:id', async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
});
  
/* Delete User */
userRoute.delete('/users/:id', async (req, res, next) => {
  try {
    const deletedUser = await User.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = userRoute;