import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import doctorRouter from './routes/doctor.route.js';


dotenv.config();

const app = express();
app.use(bodyParser.json({extended:true}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({credentials: true ,origin:'http://localhost:3000'}))

app.use('/api/user', userRoutes); // This will handle routes under /api/user
app.use('/api/admin', adminRoutes); // This will handle routes under /api/admin

  
app.use('/api/doctor', doctorRouter);
app.use('/api/admin', adminrouter);
app.use('api/patient',patientrouter);

const port = process.env.PORT || 6000;

// Replace with your MongoDB connection string
const mongoURI =process.env.MONGO_URI;

 mongoose.connect(mongoURI)
   .then(() => console.log('MongoDB connected...'))
   .then(()=> app.listen(port, () => { 
    console.log(`Server is running on http://localhost:${port}`);}))
   .catch(err => console.log(err));

