const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');



dotenv.config()
const app = express();

app.use(bodyParser.json({extended:true}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({credentials: true ,origin:'http://localhost:3000'}))


const port = process.env.PORT || 6000;

// Replace with your MongoDB connection string
const mongoURI ="";

// Connect to MongoDB
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected...'))
//   .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
