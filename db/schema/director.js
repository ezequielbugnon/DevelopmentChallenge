const mongoose = require('mongoose');
const { Schema } = mongoose;


const directorSchema = new Schema({
    name: { type: String, required: [true, 'The name is required'] },
    movies: [{ 
        type: Schema.Types.ObjectId, 
        ref: "Movie" 
    }],
    tvshows: [{ 
        type: Schema.Types.ObjectId, 
        ref: "Tvshow" 
    }],
    updated_at: { type: Date, default: Date.now() }
})


module.exports = mongoose.model('Director', directorSchema);