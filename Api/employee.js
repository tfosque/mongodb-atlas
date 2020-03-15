const express = require('express');
// const mongoose = require('mongoose');
const Employee = require('../DB/Empooyee');
const route = express.Router();

route.post('/', async (req, res) => {
  const {
    fname,
    lname,
    name,
    dob,
    email,
    title,
    zip,
    title,
    id,
    role,
  } = req.body;

  let employee = {};
  employee.fname = fname;
  employee.lname = lname;
  employee.name = name;
  employee.dob = dob;
  employee.title = title;
  employee.email = email;
  employee.zip = zip;
  employee.role = role;
  employee.id = id;

  let userModel = new Employee(employee);
  await userModel.save();
  res.json(userModel);
});

module.exports = route;
