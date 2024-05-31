import express from "express";
import registerController from '../controllers/register-controller';
import { validator, validatorParams } from "../Middleware/registerValidator";


const router = express.Router();


router.post('/', validatorParams, validator, registerController);


export default router;