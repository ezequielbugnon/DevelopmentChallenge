const express = require('express');
const db = require('./db/index.js');
const userRoutes = require('./api/routes/userRoutes.js');
const moviesRoutes = require('./api/routes/movieRoutes.js');
const directorRoutes = require('./api/routes/directorRoutes.js');
const actorRoutes = require('./api/routes/actorRoutes.js');
const tvShowRoutes = require('./api/routes/tvShowRoutes.js');
const multer = require('multer');
const morgan = require('morgan');
const path = require('path');

const app = express();

const nameAPI = '/api_moviesapp';
db();

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/img/uploads'),
  filename: (req, file, cb, filename) => {

    cb(null, Date.now() + path.extname(file.originalname))
  }
});

app.use(multer({ storage }).single('image'));

app.set('port', 3000, process.env.PORT);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));


app.use(nameAPI, userRoutes);
app.use(nameAPI, moviesRoutes);
app.use(nameAPI, directorRoutes);
app.use(nameAPI, actorRoutes);
app.use(nameAPI, tvShowRoutes);

app.listen(app.get('port'), () => console.log("The app server has started!!!"));