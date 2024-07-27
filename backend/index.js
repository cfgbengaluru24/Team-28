const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 6000;

// Replace with your MongoDB connection string
const mongoURI =process.env.MONGO_URI;

 mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('MongoDB connected...'))
   .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
