import * as express from 'express';
import Handler from '../handler/otp.handler';
import validate from '../../../joi/joi.validate';
import validator from '../validator/otp.validator';
import auth from '../../../jwt/jwt.api';

const router = express.Router();

router.post('/phone', validate(validator.contact), Handler.sendPhone);
router.post('/email', validate(validator.email), Handler.sendEmail);
router.use(auth());
router.get('/get', Handler.getOtps);

export default router;