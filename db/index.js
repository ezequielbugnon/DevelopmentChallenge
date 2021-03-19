const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

const db = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION,{
            useNewUrlParser: true, useUnifiedTopology: true, 
            useFindAndModify: false, useCreateIndex: true 
        })

        console.info(`Connected to database on Worker process: ${process.pid}`)
        
    } catch (error) {
        console.error(`Connection error: ${error.stack} on Worker process: ${process.pid}`)
        process.exit(1)
    }
}

module.exports = db;