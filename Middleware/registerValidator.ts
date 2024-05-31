import {check, validationResult} from "express-validator";
import { NextFunction, Request, Response } from "express";


const validatorParams = [

    check('name').isLength({min:1, max: 255}).withMessage('El nombre es obligatorio y no puede exceder 255 caracteres.'),
    check('LastName').isLength({min:1, max:255}).withMessage('El apellido es obligatorio y no puede exceder 255 caracteres'),
    check('email').isEmail().withMessage('Debe ser un correo electronico valido'),
    check('password').isLength({min:8 , max:15}).withMessage('La contraseña debe tener entre 8 y 15 caracteres.'),
    check('sure').isLength({min:1, max:15}).withMessage('Su  seguro es obligatorio y no puede exceder 255 caracteres')
]


function validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log(errors);
    
    next();
}

export {validatorParams, validator};