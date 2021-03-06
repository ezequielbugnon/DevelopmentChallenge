const mongoose = require('mongoose');
const { Schema } = mongoose;

const actorSchema = new Schema({
    name: { type: String, required: [true, 'The name is required'] },
    movies:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie"
    }],
    tvshows:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tvshow"
    }],
    updated_at: { type: Date, default: Date.now() }
})


module.exports = mongoose.model('Actor', actorSchema);