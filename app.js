// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const projectCtrl = require('./controllers/project')
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//mongo connection
mongoose
    .connect(
        `mongodb+srv://dbUser:AZZ12&&AA11@trickotrack.zc5fh2v.mongodb.net/TrickOTrack?retryWrites=true&w=majority&appName=TrickOTrack`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((e) => console.log(`Connexion à MongoDB échouée !`+e))


// Routes projets
app.get('/api/projets', projectCtrl.ProjectList);
app.get('/api/projets/:id',projectCtrl.findProject);

//Routes suppresion données
app.delete('/api/projets/:id',projectCtrl.deleteProject);

app.post('/api/project', (req, res) => {
  const nouveauProjet = { id: projets.length + 1, ...req.body };
  projets.push(nouveauProjet);
  res.status(201).json(nouveauProjet);      
});

// Routes envies
app.get('/api/envies', (req, res) => {
  res.json(envies);
});

app.post('/api/envies', (req, res) => {
  const nouvelleEnvie = { id: envies.length + 1, ...req.body };
  envies.push(nouvelleEnvie);
  res.status(201).json(nouvelleEnvie);
});

//Route finis
app.get('/api/finish', (req, res) => {
  res.json(finish);
});

app.post('/api/finish', (req, res) => {
  const projetFini = { id: finish.length + 1, ...req.body };
  finish.push(projetFini);
  res.status(201).json(projetFini);
});

module.exports = app
