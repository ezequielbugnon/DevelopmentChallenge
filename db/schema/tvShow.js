const mongoose = require('mongoose');
const { Schema } = mongoose;


const movieSchema = new Schema({
    name: { type: String, required: [true, 'The name is required'] },
    director: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Director"
    },
    actors:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Actor"
    }],
    updated_at: { type: Date, default: Date.now() }
})


module.exports = mongoose.model('Tvshow', movieSchema);