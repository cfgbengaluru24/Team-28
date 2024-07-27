// adminRoutes.js
import express from 'express';
import { login as adminLogin } from '../controllers/admin.controller.js'; // Import your controller

const router = express.Router();

// Define the route for admin login
router.post('/login', adminLogin);

export default router;
