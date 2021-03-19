const router = require('express').Router();
const directorController = require('../controllers/directorController.js');
const token = require('../../jwt/index.js');


router.get('/directors', directorController.getAllDirector);
router.get('/directors/:id', directorController.getOneDirector);
router.post('/directors/add',token.check, directorController.createDirector);
router.delete('/directors/delete/:id',token.check, directorController.deleteDirector);


module.exports= router;