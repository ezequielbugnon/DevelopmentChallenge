const Movies = require('../../db/schema/movie.js');
const Actor = require('../../db/schema/actor.js');
const Director = require('../../db/schema/director.js');
const Cloudinary = require('cloudinary');
const fs = require('fs-extra');
const movieController = {}

Cloudinary.config({ 
    cloud_name: 'dosy3pkww', 
    api_key: process.env.KEY, 
    api_secret: process.env.APISECRET
});
  
movieController.getAllMovies = async(req, res) => {
    try {
        const movies = await Movies.find({}).populate('director', {movies: 0, tvshows: 0}).populate('actors', {movies:0, tvshows:0});
        if(movies){
            res.status(200).json({
                response: movies
            })
        }else{
            res.status(400).json({
                response: 'No exists movies'
            })
        }
    } catch (error) {
        res.status(400).json({
            response: error
        })
        console.log(error)
    }
}

movieController.getOneMovie = async (req, res) => {
    try {
        let params = req.params.id;
        let movie = await Movies.findById(params).populate('director', {movies: 0, tvshows: 0}).populate('actors', {movies:0, tvshows:0});
        if(movie){
            res.status(200).json({
                response: movie
            })
        }else{
            res.status(400).json({
                response: 'No exist the movie'
            })
        }
    } catch (error) {
        res.status(400).json({
            response: 'No exits the movie',
            error: error
        })
        console.log(error);
    }
}

movieController.createMovie = async (req, res) =>{
    try {
        const { name } = req.body;
        if( name ){
          let movie = new Movies({
              name
          });

          let result = await movie.save();

          if(result){
                res.status(200).json({
                    response: 'Data of movie created',
                    result
                })            
          }
        }else{
            res.status(400).json({
                response: 'Data of movie no created'
            })
        }
    } catch (error) {
        res.status(400).json({
            response: 'Data of movie no created',
            error
        })
        console.log(error)
    }
}

movieController.editMovie = async(req, res) =>{
    try {
        let params = req.params.id;
        const { name } = req.body;
        let save = await Movies.findByIdAndUpdate(params, { name }, {new: true});
       
        if(save){ 
            res.status(200).json({
                response: save
            })
        }else{
            res.status(400).json({
                response: 'error could not edit'
            })
        }
      
    } catch (error) {
        res.status(400).json({
            response: 'error could not edit',
            error
        })
        console.log(error)
    }
}

movieController.deleteMovie = async(req, res) =>{
    try {
        let params = req.params.id;
        let deleting = await Movies.findByIdAndDelete(params);
        if(deleting){
                res.status(200).json({
                    response: 'Data of movie delete',
                    data: deleting
                })            
        }else{
            res.status(400).json({
                response: 'Data of movie not delete'
            })
        }
    } catch (error) {
        res.status(400).json({
            response: 'Data of movie not delete',
            error
        })
        console.log(error);
    }
}

movieController.searchMovie = async(req, res) =>{
    try {
        let serching = req.params.search;
        let match = await Movies.find({
            "$or":[
                { "name":{ "$regex": serching, "$options": "i" }}
            ]
        }).populate('director', {movies: 0, tvshows: 0}).populate('actors', {movies:0, tvshows:0});
        if(match.length >= 1){
            res.status(200).json({match})
        }
        else{
            res.status(404).json({ match: 'There aren\'t results' })
        }
    } catch (error) {
        res.status(404).json({ match: 'There aren\'t results', error })
        console.log(error)
    }
}

movieController.addActorInMovie = async(req, res)=>{
    try {
        const { actorID }= req.body;
        const params = req.params.id;
        let movie = await Movies.findById(params);
        let actor = await Actor.findById(actorID);
        if(movie && actor){
            actor.movies.push(params);
            movie.actors.push(actorID);
            let save = await movie.save();
            let saveActor = await actor.save();
            if(save && saveActor){
                res.status(200).json({response: 'actor added in movie'})
            }else{
                res.status(400).json({response: 'no actor added in movie'})
            }

        }else{
            res.status(404).json({response: 'Incorrects ids'})
        }
    } catch (error) {
        res.status(404).json({response: 'Incorrects ids', error})
        console.log(error) 
    }
}

movieController.addImage = async(req, res) =>{
    if(req.file && req.body){
        try {
          let { path } = req.file; 
          let { id } = req.params;
          let imageUpload = await Cloudinary.v2.uploader.upload(path, { folder: 'appMovies'})
 
          if(imageUpload){
            let movie = await Movies.findById(id);
            movie.image = imageUpload.url;
            let result = await movie.save()
            fs.unlink(req.file.path)
            res.status(200).json({ response: result })
          }else{
             res.status(400).json({ response: 'error file upload' })
          }
        } catch (error) {
          console.log(error)
             res.json({
               response: 'Error file upload',
               error
             })
        }
    }
}

movieController.deleteImage = async (req, res) =>{
    try {
        const result = await Movies.findById(req.params.id)
        await Cloudinary.v2.uploader.destroy(result.image);
        result.image = "";
        let response = await result.save();
        if(response){
          res.status(200).json({'message': 'image deleted'});  
        }else{
            res.status(400).json({'message': 'image not deleted'});  
        }
    } catch (error) {
        res.status(401).json({error});
    }
   

}


movieController.addDirector = async(req, res)=>{
    try {
        const { directorID }= req.body;
        const params = req.params.id;
        let movie = await Movies.findById(params);
        const director = await Director.findById(directorID);

        if(movie && director){
            movie.director = directorID;
            director.movies.push(movie._id);
            let save = await movie.save();
            let saveMovie = await director.save();

            if(save && saveMovie){
                res.status(200).json({response: 'director added in movie'})
            }else{
                res.status(400).json({response: 'no director added in movie'})
            }

        }else{
            res.status(404).json({response: 'Incorrects ids'})
        }
    } catch (error) {
        res.status(404).json({response: 'Incorrects ids', error})
        console.log(error) 
    }
}


module.exports = movieController;