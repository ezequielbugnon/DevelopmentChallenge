import { Router } from 'express';
import { 
    getAllDirector, 
    getOneDirector, 
    createDirector,
    deleteDirector,
} from '../controllers/directorController.js';
import token from '../../jwt/index.js'

const router = Router();

router.get('/directors', getAllDirector);
router.get('/directors/:id', getOneDirector);
router.post('/directors/add',token.check, createDirector);
router.delete('/directors/delete/:id',token.check, deleteDirector);

export default router;