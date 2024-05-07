import express from "express";
import registerController from '../controllers/register-controller';
import inventarioController from "../controllers/inventario-Controller";

const router = express.Router();


router.post('/', registerController);


export default router;