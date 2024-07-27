import express from 'express';
const doctorRouter = express.Router();
import { login, register, logout, findPatientByGovtId, findPatientByLocation, findPatientByName, addPatient, addRecord, getDoctorById } from '../controllers/doctor.controller.js';
import { protect } from '../middleware/authMiddleware.js';

// Define your routes here
doctorRouter.post('/login', login);
doctorRouter.post('/register', register);
doctorRouter.post('/logout', logout);
doctorRouter.get('/patient/govtId',protect, findPatientByGovtId);
doctorRouter.get('/patient/name',protect, findPatientByName);
doctorRouter.get('/patient/location',protect, findPatientByLocation);
doctorRouter.post('/patient/add',protect, addPatient);
doctorRouter.post('/patient/record/add',protect, addRecord);
doctorRouter.get('/me',protect, getDoctorById );



export default doctorRouter;