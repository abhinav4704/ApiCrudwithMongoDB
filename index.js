const express = require('express');
const mongoose = require('mongoose');
const productRoute = require("./routes/productroutes"); // Correct path

// Corrected connection string
mongoose.connect('mongodb://localhost:27017/Apidb')
  .then(() => {
    console.log('connected');
  })
  .catch(err => {
    console.error('Connection error', err);
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use product routes
app.use('/', productRoute);

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
