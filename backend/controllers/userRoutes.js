// userRoutes.js
import express from 'express';
import { login as doctorLogin } from '../controllers/doctor.controller.js'; // Import your controller

const router = express.Router();

// Define the route for doctor login
router.post('/login', doctorLogin);

export default router;
