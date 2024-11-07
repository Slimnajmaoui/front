let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoDb = require('./database/db');
  
mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db).then(() => {
    console.log('Database successfully connected ')
  },
  error => {
    console.log('Database error: ' + error)
  }
)
  
const postRoute = require('./routes/post.routes')
const adminRoute = require('./routes/admin.routes')
const userRoute = require('./routes/user.routes')
const chefdeprojetRoute = require('./routes/chefdeprojet.routes')
const projetRoute = require('./routes/projet.routes')
const tacheRoute = require('./routes/tache.routes')
const avprojetRoute = require('./routes/avprojet.routes')
const avtacheRoute = require('./routes/avtache.routes')
const affprojetRoute = require('./routes/affprojet.routes')
const afftacheRoute = require('./routes/afftache.routes')
const affgroupeRoute = require('./routes/affgroupe.routes')
const competenceRoute = require('./routes/competence.routes')
const absenceRoute = require('./routes/absence.routes')
const congeRoute = require('./routes/conge.routes')
const groupeRoute = require('./routes/groupe.routes')
const profilRoute = require('./routes/profil.routes')

  
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
  
/* Static directory path */
app.use(express.static(path.join(__dirname, 'dist/angular-mean-crud-tutorial')));
  
/* API root */
app.use('/api', postRoute)
app.use('/apiadmin', adminRoute)
app.use('/apiuser', userRoute)
app.use('/apichefdeprojet', chefdeprojetRoute)
app.use('/apiprojet', projetRoute)
app.use('/apitache', tacheRoute)
app.use('/apiavprojet', avprojetRoute)
app.use('/apiavtache', avtacheRoute)
//app.use('/apiaffprojet', affprojetRoute)
app.use('/apiafftache', afftacheRoute)
app.use('/apiaffgroupe', affgroupeRoute)
app.use('/apicompetence', competenceRoute)
app.use('/apiabsence', absenceRoute)
app.use('/apiconge', congeRoute)
app.use('/apigroupe', groupeRoute)
app.use('/apiprofil', profilRoute)

  
/* PORT */
const port = process.env.PORT || 8000;
  
app.listen(port, () => {
  console.log('Listening on port ' + port)
})
  
/* 404 Handler */
app.use((req, res, next) => {
  next(createError(404));
});
  
/* Base Route */
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});
  
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-mean-crud-tutorial/index.html'));
});
  
/* error handler */
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
