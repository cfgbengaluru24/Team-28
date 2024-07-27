import express from 'express';
const doctorRouter = express.Router();
import { login, register, logout, findPatientByGovtId, findPatientByName, findPatientByLocation } from '../controllers/doctor.controller.js';
import { getHaemoglobinVsWeight } from '../controllers/admin.controller.js';

// Define your routes here
doctorRouter.post('/login', login);
doctorRouter.post('/register', register);
doctorRouter.post('/logout', logout);
doctorRouter.get('/patient/govtId', findPatientByGovtId);
doctorRouter.get('/patient/name', findPatientByName);
doctorRouter.get('/patient/location', findPatientByLocation);
doctorRouter.get('/patient/hemochart', getHaemoglobinVsWeight)

export default doctorRouter;