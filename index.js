import express from 'express';
import { db } from './db/index.js';
import userRoutes from './api/routes/userRoutes.js';
import moviesRoutes from './api/routes/movieRoutes.js';
import directorRoutes from './api/routes/directorRoutes.js';
import actorRoutes from './api/routes/actorRoutes.js';
import multer from 'multer';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const nameAPI = '/api_moviesapp';
db();

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/img/uploads'),
  filename: (req, file, cb, filename) => {

    cb(null, Date.now() + path.extname(file.originalname))
  }
})
app.use(multer({ storage }).single('image'))

app.set('port', 3000, process.env.PORT);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));


app.use(nameAPI, userRoutes);
app.use(nameAPI, moviesRoutes);
app.use(nameAPI, directorRoutes);
app.use(nameAPI, actorRoutes);

app.listen(app.get('port'), () => console.log("The app server has started!!!"));