const mongoose = require('mongoose');

const employee = new mongoose.Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  name: {
    type: String,
  },
  zip: {
    type: String,
  },
  dob: {
    type: String,
  },
  email: {
    type: String,
  },
  role: {
    type: String,
  },
  title: {
    type: String,
  },
  id: {
    type: String,
  },
});
