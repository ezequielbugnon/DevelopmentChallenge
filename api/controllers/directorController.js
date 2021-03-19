const Director = require('../../db/schema/director.js');
const directorController = {}

directorController.getAllDirector = async(req, res) => {
    try {
        const director = await Director.find({}).populate('movies',{director:0, actors:0}).populate('tvshows', {director:0, actors:0});
        if(director){
            res.status(200).json({
                response: director
            })
        }else{
            res.status(400).json({
                response: 'No exists director'
            })
        }
    } catch (error) {
        res.status(400).json({
            response: error
        })
        console.log(error)
    }
}

directorController.getOneDirector = async(req, res) =>{
    try {
        let params = req.params.id;
        let director = await Director.findById(params).populate('movies',{director:0, actors:0}).populate('tvshows', {director:0, actors:0});
        if(director){
            res.status(200).json({
                response: director
            })
        }else{
            res.status(400).json({
                response: 'No exist the director'
            })
        }
    } catch (error) {
        res.status(400).json({
            response: 'No exits the director',
            error: error
        })
        console.log(error);
    }
}

directorController.createDirector = async(req, res) =>{
    try {
        const { name } = req.body;
        if( name ){
          let director = new Director({name});
          let result = await director.save();
          if(result){
             res.status(200).json({
                 response: 'Director created',
                 result
             })
          }
        }else{
            res.status(400).json({
                response: 'Director no created'
            })
        }
    } catch (error) {
        res.status(400).json({
            response: 'Director no created',
            result
        })
        console.log(error)
    }
}

directorController.deleteDirector = async(req, res) =>{
    try {
        let params = req.params.id;
        let deleting = await Director.findByIdAndDelete(params);
        if(deleting){
            res.status(200).json({
                response: 'Director delete',
                data: deleting
            })
        }else{
            res.status(400).json({
                response: 'Director delete'
            })
        }
    } catch (error) {
        res.status(400).json({
            response: 'Director delete'
        })
        console.log(error);
    }
}


module.exports = directorController;