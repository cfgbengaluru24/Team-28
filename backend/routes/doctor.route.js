const doctorRouter = require('express').Router()
import { login,register,logout ,addPatient} from '../controllers/doctor.controller';

doctorRouter.post("/register",register)
doctorRouter.post("/login",login)
doctorRouter.post("/logout",logout)

doctorRouter.post("/add/patient",addPatient);
doctorRouter.post("/add/record",addRecord);

export default doctorRouter;