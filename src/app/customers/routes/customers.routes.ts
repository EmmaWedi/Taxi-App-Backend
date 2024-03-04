import * as express from 'express';
import Handler from '../handler/customers.handler';
import auth from '../../../jwt/jwt.api';

import validate from '../../../joi/joi.validate';
import validator from '../validator/customer.validator';

const router = express.Router();

router.post('/signup', validate(validator.newCustomer), Handler.signup);
router.post('/signin', validate(validator.login), Handler.signin);

router.use(auth());
router.get('/details', auth(), Handler.getCustomerDetails);
router.put('/update', validate(validator.update), Handler.updateCustomer);
router.get('/logout', Handler.logout);

export default router;