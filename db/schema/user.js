const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');
const mongoose_unique = require('mongoose-unique-validator');

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


module.exports = mongoose.model('User', userSchema);