import mongoose,{ Schema } from 'mongoose';


const movieSchema = new Schema({
    name: { type: String, required: [true, 'The name is required'] },
    updated_at: { type: Date, default: Date.now() }
})

export default mongoose.model('Movies', movieSchema);