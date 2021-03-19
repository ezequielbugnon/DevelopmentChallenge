const router = require('express').Router();
const tvShowController = require('../controllers/tvShowControllers.js');
const token = require('../../jwt/index.js');

router.get('/tvshows',tvShowController.getAllTvShows);
router.get('/tvshows/:id',tvShowController.getOneTvShow);
router.post('/tvshows/add', token.check, tvShowController.createTvShow);
router.delete('/tvshows/delete/:id', token.check, tvShowController.deleteTvShow);
router.put('/tvshows/edit/:id', token.check, tvShowController.editTvShow); 
router.get('/tvshows/search/:search', tvShowController.searchTvShow); 
router.post('/tvshows/addActor/:id', token.check, tvShowController.addActorTvShow); 
router.post('/tvshows/addDirector/:id', token.check, tvShowController.addDirectorTvShow); 

module.exports = router;