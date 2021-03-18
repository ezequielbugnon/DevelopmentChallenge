import { Router } from 'express';
import { 
    getAllActor, 
    getOneActor, 
    createActor,
    deleteActor,
} from '../controllers/actorController.js';
import token from '../../jwt/index.js'

const router = Router();

router.get('/actors', getAllActor);
router.get('/actors/:id', getOneActor);
router.post('/actors/add',token.check, createActor);
router.delete('/actors/delete/:id',token.check, deleteActor);

export default router;