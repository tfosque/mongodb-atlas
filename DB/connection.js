const mongoose = require('mongoose');

const URI =
  'mongodb+srv://tfosque:fosque14@nodejs-mgnoa.mongodb.net/test?retryWrites=true&w=majority';

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log('db connected...!');
};

module.exports = connectDB;
