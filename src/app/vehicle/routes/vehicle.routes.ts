import * as express from 'express';
import Handler from '../handler/vehicle.handler';
import auth from '../../../jwt/jwt.api';

import validate from '../../../joi/joi.validate';
import validator from '../validator/vehicle.validator';

const router = express.Router();

router.use(auth());
router.post('/add', validate(validator.newVehicle), Handler.addVehicle);
router.put('/add/image', validate(validator.addImg), Handler.addImage);
router.get('/get', Handler.getAll);
router.get('/driver/get', Handler.getDriverVehicle);

export default router;