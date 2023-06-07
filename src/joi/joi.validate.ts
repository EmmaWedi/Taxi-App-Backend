import { Request, Response, NextFunction } from 'express';
import * as joi from 'joi';
import { Validator } from './joi.model';

const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true
}

const validator = (validation: Validator) => {
    return ((req: Request | any, res: Response, next: NextFunction) => {
        let _path: string = '';
        let validator: joi.Schema<any> | any;

        Object.keys(validation).map((key: string) => {
            _path = key;
            validator = validation[key];
        })
        const { error, value } = validator.validate(req[_path], options);
        if (error) {
            res.status(400).send(
                `Validation error: ${error.details.map((x: any) => x.message).join(', ')}`
            )
        } else {
            req[_path] = value;
            next();
        }
    })
}

export default validator; 