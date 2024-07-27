import express from 'express';
const router = express.Router();
import { login, register, logout, findPatientByGovtId, findPatientByName, findPatientByLocation } from '../controllers/doctor.controller.js';

// Define your routes here
router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);
router.get('/patient/govtId/:govtId', findPatientByGovtId);
router.get('/patient/name/:name', findPatientByName);
router.get('/patient/location/:location', findPatientByLocation);

module.exports = router;