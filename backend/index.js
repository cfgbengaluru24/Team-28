const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');


dotenv.config()
const app = express();
const {errorHandler, notFound}= require("./middleware/errorMiddleware")


app.use(bodyParser.json({extended:true}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({credentials: true ,origin:'http://localhost:3000'}))


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

