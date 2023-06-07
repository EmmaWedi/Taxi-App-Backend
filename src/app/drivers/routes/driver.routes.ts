import * as express from 'express';
import Handler from '../handler/driver.handler';
import validate from '../../../joi/joi.validate';
import validator from '../validator/driver.validator';
import auth from '../../../jwt/jwt.api';

const router = express.Router();

router.post('/signup', validate(validator.newDriver), Handler.addDriver);
router.post('/login', validate(validator.login), Handler.signin);

router.use(auth());
router.get('/details', Handler.getDriverDetails);
router.put('/update', validate(validator.update), Handler.updateDriver);
router.get('/logout', Handler.logout);

export default router;