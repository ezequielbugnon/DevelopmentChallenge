import Movies from '../../db/schema/movie.js';
import Director from '../../db/schema/director.js';

export async function getAllMovies(req, res){
    try {
        const movies = await Movies.find({}).populate('director', {movies: 0});
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

export async function getOneMovie(req, res) {
    try {
        let params = req.params.id;
        let movie = await Movies.findById(params).populate('director');
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

export async function createMovie(req, res){
    try {
        const { name, director} = req.body;
        if( name && director){
          let movie = new Movies({
              name,
              director
          });
          let result = await movie.save();

          if(result){
             const response = await Director.findById(director);
             response.movies.push(result._id);
             await response.save();
             if(response){
                res.status(200).json({
                    response: 'Data of movie created',
                    result
                })
             }
            
          }
        }else{
            res.status(400).json({
                response: 'Data of movie no created'
            })
        }
    } catch (error) {
        res.status(400).json({
            response: 'Data of movie no created',
            result
        })
        console.log(error)
    }
}

export async function editMovie(req, res){
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
            response: 'error could not edit'
        })
        console.log(error)
    }
}

export async function deleteMovie(req, res){
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
            response: 'Data of movie not delete'
        })
        console.log(error);
    }
}

export async function searchMovie(req, res){
    try {
        let serching = req.params.search;
        let match = await Movies.find({
            "$or":[
                { "name":{ "$regex": serching, "$options": "i" }}
            ]
        })
        if(match.length >= 1){
            res.status(200).json({match})
        }
        else{
            res.status(404).json({ match: 'There aren\'t results' })
        }
    } catch (error) {
        console.log(error)
    }
}