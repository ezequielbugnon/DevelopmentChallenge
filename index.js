import express from 'express';
import { db } from './db/index.js';
import userRoutes from './api/routes/userRoutes.js';
import morgan from 'morgan';

const app = express();
db();

app.set('port', 3000, process.env.PORT);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));


app.use('/api_moviesapp', userRoutes);

app.listen(app.get('port'), () => console.log("The app server has started!!!"));