const doctorRouter = require('express').Router()
import { login,register,logout } from '../controllers/doctor.controller';

doctorRouter.post("/register",register)
doctorRouter.post("/login",login)
doctorRouter.post("/logout",logout)

doctorRouter.post("/patient_input")
export default doctorRouter;