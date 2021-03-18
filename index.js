import express from 'express';
import { db } from './db/index.js';
import userRoutes from './api/routes/userRoutes.js';
import moviesRoutes from './api/routes/movieRoutes.js';
import directorRoutes from './api/routes/directorRoutes.js';
import morgan from 'morgan';


const app = express();
const nameAPI = '/api_moviesapp';
db();

app.set('port', 3000, process.env.PORT);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));


app.use(nameAPI, userRoutes);
app.use(nameAPI, moviesRoutes);
app.use(nameAPI, directorRoutes);

app.listen(app.get('port'), () => console.log("The app server has started!!!"));