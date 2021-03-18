import Actor from '../../db/schema/actor.js';

export async function getAllActor(req, res){
    try {
        const actor = await Actor.find({});
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

export async function getOneActor(req, res) {
    try {
        let params = req.params.id;
        let actor = await Actor.findById(params);
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

export async function createActor(req, res){
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

export async function deleteActor(req, res){
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
            response: 'Actor delete'
        })
        console.log(error);
    }
}