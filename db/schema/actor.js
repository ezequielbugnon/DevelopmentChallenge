import mongoose from 'mongoose';
const { Schema } = mongoose;

const actorSchema = new Schema({
    name: { type: String, required: [true, 'The name is required'] },
    updated_at: { type: Date, default: Date.now() }
})

export default mongoose.model('Actor', actorSchema);