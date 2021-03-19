const router = require('express').Router();
const actorController = require('../controllers/actorController.js');
const token = require('../../jwt/index.js');

router.get('/actors', actorController.getAllActor);
router.get('/actors/:id', actorController.getOneActor);
router.post('/actors/add',token.check, actorController.createActor);
router.delete('/actors/delete/:id',token.check, actorController.deleteActor);


module.exports = router;