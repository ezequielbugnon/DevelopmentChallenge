import { Router } from 'express';
import { 
    getAllMovies, 
    getOneMovie, 
    createMovie,
    deleteMovie,
    editMovie,
    searchMovie
} from '../controllers/movieController.js';
import token from '../../jwt/index.js'

const router = Router();

router.get('/movies', getAllMovies);
router.get('/movies/:id', getOneMovie);
router.post('/movies/add',token.check, createMovie);
router.delete('/movies/delete/:id',token.check, deleteMovie);
router.put('/movies/edit/:id', token.check, editMovie); 
router.get('/movies/search/:search', searchMovie); 

export default router;