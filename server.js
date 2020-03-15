const express = require('express');
const connectDB = require('./DB/connection');

const app = express();

connectDB();
app.use(express.json({extended: false}));
app.use('/api/userModel', require('./Api/User'));
const Port = process.env.Port || 8001;

app.listen(Port, () => console.log('server started', {Port}));
