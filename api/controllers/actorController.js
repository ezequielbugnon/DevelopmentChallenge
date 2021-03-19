const Actor = require('../../db/schema/actor.js');
const actorController = {}

actorController.getAllActor = async(req, res) =>{
    try {
        const actor = await Actor.find({}).populate('movies', {actors: 0, director:0}).populate('tvshows', {actors: 0, director:0});
        if(actor){
            res.status(200).json({
                response: actor
            })
        }else{
            res.status(400).json({
                response: 'No exists actors'
            })
        }
    } catch (error) {
        res.status(400).json({
            response: error
        })
        console.log(error)
    }
}

actorController.getOneActor = async(req, res) =>{
    try {
        let params = req.params.id;
        let actor = await Actor.findById(params).populate('movies', {actors: 0, director:0}).populate('tvshows', {actors: 0, director:0});
        if(actor){
            res.status(200).json({
                response: actor
            })
        }else{
            res.status(400).json({
                response: 'No exist the actor'
            })
        }
    } catch (error) {
        res.status(400).json({
            response: 'No exits the actor',
            error: error
        })
        console.log(error);
    }
}

actorController.createActor = async(req, res) =>{
    try {
        const { name } = req.body;
        if( name ){
          let actor = new Actor({name});
          let result = await actor.save();
          if(result){
             res.status(200).json({
                 response: 'Actor created',
                 result
             })
          }
        }else{
            res.status(400).json({
                response: 'Actor no created'
            })
        }
    } catch (error) {
        res.status(400).json({
            response: 'Actor no created',
            result
        })
        console.log(error)
    }
}

actorController.deleteActor = async(req, res) => {
    try {
        let params = req.params.id;
        let deleting = await Actor.findByIdAndDelete(params);
        if(deleting){
            res.status(200).json({
                response: 'Actor delete',
                data: deleting
            })
        }else{
            res.status(400).json({
                response: 'Actor delete'
            })
        }
    } catch (error) {
        res.status(400).json({
            response: 'Actor delete',
            error
        })
        console.log(error);
    }
}


module.exports = actorController;