const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');
const app = express();
const {errorHandler, notFound}= require("./middleware/errorMiddleware")
const port = process.env.PORT || 6000;

// Replace with your MongoDB connection string
const mongoURI =process.env.MONGO_URI;

 mongoose.connect(mongoURI)
   .then(() => console.log('MongoDB connected...'))
   .then(()=> app.listen(port, () => { 
    console.log(`Server is running on http://localhost:${port}`);}))
   .catch(err => console.log(err));
  
// app.use('/api/user', );


app.use(notFound); 
app.use(errorHandler);

