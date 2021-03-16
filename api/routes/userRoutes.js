import { Router } from 'express';
import {register, login, me} from '../controllers/userController.js';
import token from '../../jwt/index.js'

const router = Router();

router.post('/user/login', login);
router.post('/user/register', register);
router.get('/user/me', token.check ,me);

export default router;