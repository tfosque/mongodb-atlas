const mongoose = require('mongoose');

const user = new mongoose.Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
});

module.exports = User = mongoose.model('user', user);
