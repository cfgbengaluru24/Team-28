import express from 'express';
const adminRouter = express.Router();
import { login, register, logout, findPatientByGovtId, findPatientByName, findPatientByLocation } from '../controllers/doctor.controller.js';
import { protect } from '../middleware/authMiddleware.js';

// Define your routes here
adminRouter.post('/login', login);
adminRouter.post('/register', register);
adminRouter.post('/logout', logout);

export default adminRouter;