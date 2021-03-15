import express from 'express';
import connectionDB from './db'

const app = express();
connectionDB();

app.set('port', 3000, process.env.PORT)

app.listen(app.get('port'), () => console.log("The app server has started!!!"))