const router = require('express').Router();
const movieController = require('../controllers/movieController.js');
const token = require('../../jwt/index.js');

router.get('/movies', movieController.getAllMovies);
router.get('/movies/:id', movieController.getOneMovie);
router.post('/movies/add',token.check, movieController.createMovie);
router.delete('/movies/delete/:id', token.check, movieController.deleteMovie);
router.put('/movies/edit/:id', token.check, movieController.editMovie); 
router.get('/movies/search/:search', movieController.searchMovie); 
router.post('/movies/addActor/:id', token.check, movieController.addActorInMovie); 
router.post('/movies/addDirector/:id', token.check, movieController.addDirector); 
router.post('/movies/addImage/:id', token.check,movieController.addImage); 
router.delete('/movies/deleteImage/:id', token.check, movieController.deleteImage);

module.exports = router;