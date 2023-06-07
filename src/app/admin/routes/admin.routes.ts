import * as express from 'express';
import Handler from '../handler/admin.handler';
import validate from '../../../joi/joi.validate';
import validator from '../validator/admin.validator';
import auth from '../../../jwt/jwt.api';

const router = express.Router();

router.post('/add', validate(validator.newAdmin), Handler.addAdmin);
router.post('/login', validate(validator.login), Handler.signin);

router.use(auth());
router.get('/details', Handler.getAdminDetails);
router.put('/update', validate(validator.update), Handler.updateAdmin);
router.get('/logout', Handler.logout);

export default router;