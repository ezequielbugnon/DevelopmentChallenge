import mongoose from 'mongoose';
const { Schema } = mongoose;
import bcrypt from 'bcryptjs';
import mongoose_unique from 'mongoose-unique-validator';

const userSchema = new Schema({
    name: { type: String, required: [true, 'The name is required']},
    email: {type: String, required: [true, 'The email is required'], unique: true},
    password: {type: String, required: [true, 'The password is required']},
    updated_at: { type: Date, default: Date.now()}
})

userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

userSchema.methods.comparePassword = async function (password){
    let result = await bcrypt.compare(password, this.password)
    return result
}

userSchema.plugin(mongoose_unique, { message: '{PATH} debe de ser único' });

export default mongoose.model('User', userSchema);