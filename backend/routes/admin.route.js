import express from 'express';
const adminRouter = express.Router();
import { login, register, logout, getHaemoglobinVsWeight } from '../controllers/admin.controller.js';
import { protect } from '../middleware/authMiddleware.js';

// Define your routes here
adminRouter.post('/login', login);
adminRouter.post('/register', register);
adminRouter.post('/logout', logout);
adminRouter.get('/hemo/graph', getHaemoglobinVsWeight);

export default adminRouter;