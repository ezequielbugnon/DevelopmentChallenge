const TvShow = require('../../db/schema/tvShow.js');
const Actor = require('../../db/schema/actor.js');
const Director = require('../../db/schema/director.js');
const tvShowController = {}


tvShowController.getAllTvShows = async(req, res) => {
    try {
        const tvshow = await TvShow.find({}).populate('director', {movies: 0, tvshows: 0}).populate('actors', {movies: 0, tvshows: 0});
        if(tvshow){
            res.status(200).json({
                response: tvshow
            })
        }else{
            res.status(400).json({
                response: 'No exists Tv Shows'
            })
        }
    } catch (error) {
        res.status(400).json({
            response: error
        })
        console.log(error)
    }
}

tvShowController.getOneTvShow = async (req, res) => {
    try {
        let params = req.params.id;
        let tvshow = await TvShow.findById(params).populate('director',{movies: 0, tvshows: 0}).populate('actors', {movies: 0, tvshows: 0});
        if(tvshow){
            res.status(200).json({
                response: tvshow 
            })
        }else{
            res.status(400).json({
                response: 'No exist the tv show'
            })
        }
    } catch (error) {
        res.status(400).json({
            response: 'No exits the tv show',
            error: error
        })
        console.log(error);
    }
}

tvShowController.createTvShow = async (req, res) =>{
    try {
        const { name } = req.body;
        if( name ){
          let tvshow = new TvShow({
              name
          });

          let result = await tvshow.save();

          if(result){
                res.status(200).json({
                    response: 'Tv Show created',
                    result
                })
          }
        }else{
            res.status(400).json({
                response: 'Tv Show no created'
            })
        }
    } catch (error) {
        res.status(400).json({
            response: 'Tv Show no created',
            error
        })
        console.log(error)
    }
}

tvShowController.editTvShow = async(req, res) =>{
    try {
        let params = req.params.id;
        const { name } = req.body;
        let save = await TvShow.findByIdAndUpdate(params, { name }, {new: true});
       
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
            erorr
        })
        console.log(error)
    }
}

tvShowController.deleteTvShow = async(req, res) =>{
    try {
        let params = req.params.id;
        let deleting = await TvShow.findByIdAndDelete(params);
        if(deleting){
                res.status(200).json({
                    response: 'Tv Shows delete',
                    data: deleting
                })            
        }else{
            res.status(400).json({
                response: 'No deleted tv show '
            })
        }
    } catch (error) {
        res.status(400).json({
            response: 'No deleted tv show',
            erorr
        })
        console.log(error);
    }
}

tvShowController.searchTvShow = async(req, res) =>{
    try {
        let serching = req.params.search;
        let match = await TvShow.find({
            "$or":[
                { "name":{ "$regex": serching, "$options": "i" }}
            ]
        }).populate('director',{movies: 0, tvshows: 0}).populate('actors', {movies: 0, tvshows: 0});
        if(match.length >= 1){
            res.status(200).json({match})
        }
        else{
            res.status(404).json({ match: 'There aren\'t results' })
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ match: 'There aren\'t results', erorr})
    }
}

tvShowController.addActorTvShow = async(req, res)=>{
    try {
        const { actorID }= req.body;
        const params = req.params.id;
        let tvshow = await TvShow.findById(params);
        let actor = await Actor.findById(actorID);

        if(tvshow && actor){
            actor.tvshows.push(params);
            tvshow.actors.push(actorID);
            let save = await tvshow.save();
            let saveActor = await actor.save();
            if(save && saveActor){
                res.status(200).json({response: 'actor added in tv show'})
            }else{
                res.status(400).json({response: 'no actor added in tv show'})
            }

        }else{
            res.status(404).json({response: 'Incorrects ids'})
        }
    } catch (error) {
        res.status(404).json({response: 'Incorrects ids'})
        console.log(error) 
    }
}

tvShowController.addDirectorTvShow = async(req, res)=>{
    try {
        const { directorID }= req.body;
        const params = req.params.id;
        let tvshow = await TvShow.findById(params);
        const director = await Director.findById(directorID);

        if(tvshow && director){
            tvshow.director = directorID;
            director.tvshows.push(tvshow._id);
            let save = await tvshow.save();
            let saveTv = await director.save();

            if(save && saveTv){
                res.status(200).json({response: 'director added in tv show'})
            }else{
                res.status(400).json({response: 'no director added in tv show'})
            }

        }else{
            res.status(404).json({response: 'Incorrects ids'})
        }
    } catch (error) {
        res.status(404).json({response: 'Incorrects ids', error})
        console.log(error) 
    }
}

module.exports = tvShowController;