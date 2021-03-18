import mongoose from 'mongoose';
const { Schema } = mongoose;


const directorSchema = new Schema({
    name: { type: String, required: [true, 'The name is required'] },
    movies: [{ 
        type: Schema.Types.ObjectId, 
        ref: "Movie" 
    }],
    updated_at: { type: Date, default: Date.now() }
})

export default mongoose.model('Director', directorSchema);