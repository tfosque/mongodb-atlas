const express = require('express');
// const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();

route.post('/', async (req, res) => {
  const {fname, lname} = req.body;
  let user = {};
  user.fname = fname;
  user.lname = lname;

  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});

module.exports = route;
