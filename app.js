// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Données fictives pour tester
let projets = [
    {
        "id": "6",
        "title": "Rosa",
        "cover": "http://www.image-heberg.fr/files/17448846413422693056.png",
        "pictures": "http://www.image-heberg.fr/files/17448846653789862888.png",
        "designer": "Along avec anna",
        "categorie": "Pull, Sweater",
        "fil": "DK",
        "challenge": "Faire une beau raglan",
        "langue": "Anglais, Français",
        "difficulté": "Débutant",
        "havePatron": true,
        "statut": "en cours",
        "échantillon": true,
        "note": "jolie détail de raglan"
    },
    {
        "id": "7",
        "title": "Into the wild",
        "cover": "http://www.image-heberg.fr/files/17448822634023506435.png",
        "pictures": "http://www.image-heberg.fr/files/17448824362173098678.png",
        "designer": "Tania Barley",
        "categorie": "Pull, Sweater",
        "début": "10 février 2025",
        "fin": "20 mai 2025",
        "fil": "DK",
        "aiguilles": "3,5",
        "size": "38/M",
        "patron": "paid",
        "échantillon": true,
        "langue": "Anglais",
        "difficulté": "Intermédiare",
        "note": "",
        "statut": "en cours"
    },
    {
        "id": "8",
        "title": "Whitmoor",
        "cover": "http://www.image-heberg.fr/files/17448830232581353768.png",
        "pictures": "http://www.image-heberg.fr/files/17448830451346658815.png",
        "designer": "Ami Lowden",
        "categorie": "Pull, Sweater",
        "début": "10 février 2025",
        "fin": "20 mai 2025",
        "fil": "DK",
        "aiguilles": "3,5",
        "size": "38/M",
        "patron": "paid",
        "échantillon": true,
        "langue": "Anglais,Français",
        "difficulté": "Intermédiare",
        "note": "",
        "statut": "en cours"
    },
    {
        "id": "9",
        "title": "Théodore Wrap",
        "cover": "http://www.image-heberg.fr/files/17448835561827395545.png",
        "pictures": "http://www.image-heberg.fr/files/1744883585914420603.png",
        "designer": "Johanna Gehrisch",
        "categorie": "Cardigan",
        "début": "10 février 2025",
        "fin": "20 mai 2025",
        "fil": "DK",
        "aiguilles": "3,5",
        "size": "38/M",
        "patron": "paid",
        "échantillon": true,
        "langue": "Anglais, Français",
        "difficulté": "Intermédiare",
        "note": "",
        "statut": "en cours"
    },
    {
        "id": "10",
        "title": "Rosa",
        "cover": "http://www.image-heberg.fr/files/17448846413422693056.png",
        "pictures": "http://www.image-heberg.fr/files/17448846653789862888.png",
        "designer": "Along avec anna",
        "categorie": "Pull, Sweater",
        "début": "10 février 2025",
        "fin": "20 mai 2025",
        "fil": "DK",
        "aiguilles": "3,5",
        "size": "38/M",
        "patron": "paid",
        "échantillon": true,
        "langue": "Anglais, Français",
        "difficulté": "Débutant",
        "note": "",
        "statut": "en cours"
    },
    {
        "id": "11",
        "title": "Théodore Wrap",
        "cover": "http://www.image-heberg.fr/files/17448835561827395545.png",
        "pictures": "http://www.image-heberg.fr/files/1744883585914420603.png",
        "designer": "Johanna Gehrisch",
        "categorie": "Cardigan",
        "début": "10 février 2025",
        "fin": "20 mai 2025",
        "fil": "DK",
        "aiguilles": "3,5",
        "size": "38/M",
        "patron": "paid",
        "échantillon": true,
        "langue": "Anglais, Français",
        "difficulté": "Intermédiare",
        "note": "",
        "statut": "en cours"
    },
    {
        "id": "12",
        "title": "Rosa",
        "cover": "http://www.image-heberg.fr/files/17448846413422693056.png",
        "pictures": "http://www.image-heberg.fr/files/17448846653789862888.png",
        "designer": "Along avec anna",
        "categorie": "Pull, Sweater",
        "début": "10 février 2025",
        "fin": "20 mai 2025",
        "fil": "DK",
        "aiguilles": "3,5",
        "size": "38/M",
        "patron": "paid",
        "échantillon": true,
        "langue": "Anglais, Français",
        "difficulté": "Débutant",
        "note": "",
        "statut": "en cours"
    },
    {
        "id": "1",
        "title": "Into the wild",
        "cover": "http://www.image-heberg.fr/files/17448822634023506435.png",
        "pictures": "http://www.image-heberg.fr/files/17448824362173098678.png",
        "designer": "Tania Barley",
        "categorie": "Pull, Sweater",
        "fil": "DK",
        "challenge": "Faire un beaux jacquard",
        "langue": "Anglais",
        "difficulté": "Intermédiare",
        "havePatron": true,
        "statut": "envie"
    },
    {
        "id": "2",
        "title": "Whitmoor",
        "cover": "http://www.image-heberg.fr/files/17448830232581353768.png",
        "pictures": "http://www.image-heberg.fr/files/17448830451346658815.png",
        "designer": "Ami Lowden",
        "categorie": "Pull, Sweater",
        "fil": "DK",
        "challenge": "Faire une belle dentelle",
        "langue": "Anglais,Français",
        "difficulté": "Intermédiare",
        "havePatron": true,
        "statut": "envie"
    },
    {
        "id": "3",
        "title": "Théodore Wrap",
        "cover": "http://www.image-heberg.fr/files/17448835561827395545.png",
        "pictures": "http://www.image-heberg.fr/files/1744883585914420603.png",
        "designer": "Johanna Gehrisch",
        "categorie": "Cardigan",
        "fil": "DK",
        "challenge": "Faire une belle bordure",
        "langue": "Anglais, Français",
        "difficulté": "Intermédiare",
        "havePatron": true,
        "statut": "envie"
    },
    {
        "id": "4",
        "title": "Rosa",
        "cover": "http://www.image-heberg.fr/files/17448846413422693056.png",
        "pictures": "http://www.image-heberg.fr/files/17448846653789862888.png",
        "designer": "Along avec anna",
        "categorie": "Pull, Sweater",
        "fil": "DK",
        "challenge": "Faire une beau raglan",
        "langue": "Anglais, Français",
        "difficulté": "Débutant",
        "havePatron": true,
        "statut": "envie"
    },
    {
        "id": "5",
        "title": "Théodore Wrap",
        "cover": "http://www.image-heberg.fr/files/17448835561827395545.png",
        "pictures": "http://www.image-heberg.fr/files/1744883585914420603.png",
        "designer": "Johanna Gehrisch",
        "categorie": "Cardigan",
        "fil": "DK",
        "challenge": "Faire une belle bordure",
        "Langue": "Anglais, Français",
        "difficulté": "Intermédiare",
        "havePatron": true,
        "statut": "envie"
    },
    {
        "id": "13",
        "title": "Into the wild",
        "cover": "http://www.image-heberg.fr/files/17448822634023506435.png",
        "pictures": "http://www.image-heberg.fr/files/17448824362173098678.png",
        "designer": "Tania Barley",
        "categorie": "Pull, Sweater",
        "début": "10 février 2025",
        "fin": "20 mai 2025",
        "fil": "DK",
        "aiguilles": "3,5",
        "size": "38/M",
        "patron": "paid",
        "échantillon": true,
        "langue": "Anglais",
        "difficulté": "Intermédiare",
        "note": "",
        "statut": "fini"
    },
    {
        "id": "14",
        "title": "Whitmoor",
        "cover": "http://www.image-heberg.fr/files/17448830232581353768.png",
        "pictures": "http://www.image-heberg.fr/files/17448830451346658815.png",
        "designer": "Ami Lowden",
        "categorie": "Pull, Sweater",
        "début": "10 février 2025",
        "fin": "20 mai 2025",
        "fil": "DK",
        "aiguilles": "3,5",
        "size": "38/M",
        "patron": "paid",
        "échantillon": true,
        "langue": "Anglais,Français",
        "difficulté": "Intermédiare",
        "note": "",
        "statut": "fini"
    },
    {
        "id": "15",
        "title": "Théodore Wrap",
        "cover": "http://www.image-heberg.fr/files/17448835561827395545.png",
        "pictures": "http://www.image-heberg.fr/files/1744883585914420603.png",
        "designer": "Johanna Gehrisch",
        "categorie": "Cardigan",
        "début": "10 février 2025",
        "fin": "20 mai 2025",
        "fil": "DK",
        "aiguilles": "3,5",
        "size": "38/M",
        "patron": "paid",
        "échantillon": true,
        "langue": "Anglais, Français",
        "difficulté": "Intermédiare",
        "note": "",
        "statut": "fini"
    },
    {
        "id": "16",
        "title": "Rosa",
        "cover": "http://www.image-heberg.fr/files/17448846413422693056.png",
        "pictures": "http://www.image-heberg.fr/files/17448846653789862888.png",
        "designer": "Along avec anna",
        "categorie": "Pull, Sweater",
        "début": "10 février 2025",
        "fin": "20 mai 2025",
        "fil": "DK",
        "aiguilles": "3,5",
        "size": "38/M",
        "patron": "paid",
        "échantillon": true,
        "langue": "Anglais, Français",
        "difficulté": "Débutant",
        "note": "",
        "statut": "fini"
    },
    {
        "id": "17",
        "title": "Théodore Wrap",
        "cover": "http://www.image-heberg.fr/files/17448835561827395545.png",
        "pictures": "http://www.image-heberg.fr/files/1744883585914420603.png",
        "designer": "Johanna Gehrisch",
        "categorie": "Cardigan",
        "début": "10 février 2025",
        "fin": "20 mai 2025",
        "fil": "DK",
        "aiguilles": "3,5",
        "size": "38/M",
        "patron": "paid",
        "échantillon": true,
        "langue": "Anglais, Français",
        "difficulté": "Intermédiare",
        "note": "",
        "statut": "fini"
    },
    {
        "id": "18",
        "title": "Rosa",
        "cover": "http://www.image-heberg.fr/files/17448846413422693056.png",
        "pictures": "http://www.image-heberg.fr/files/17448846653789862888.png",
        "designer": "Along avec anna",
        "categorie": "Pull, Sweater",
        "début": "10 février 2025",
        "fin": "20 mai 2025",
        "fil": "DK",
        "aiguilles": "3,5",
        "size": "38/M",
        "patron": "paid",
        "échantillon": true,
        "langue": "Anglais, Français",
        "difficulté": "Débutant",
        "note": "",
        "statut": "fini"
    }
];

// Route de test
app.get('/', (req, res) => {
  res.send('Bienvenue sur Tric’o Track API !');
});

// Routes projets
app.get('/api/projets', (req, res) => {
  res.json(projets);
});
app.get('/api/projets/:id', (req, res) => {

  res.json(projets.filter(projet => projet.id == req.params.id )[0]);
});

app.post('/api/projets', (req, res) => {
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
