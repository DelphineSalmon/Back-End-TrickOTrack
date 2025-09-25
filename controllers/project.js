const Project = require('../models/Project')
const sanitize = require('mongo-sanitize')

//logique recherche des livres
exports.ProjectList = (req, res, next) => {
    Project.find()
        .then((projects) => 
            res.status(200).json(projects)) // requete ok
        .catch((error) => res.status(500).json({ error })) //erreur serveur
}

//logique de recherche de livre sous id
exports.findProject = (req, res, next) => {
    const cleanProjectId = sanitize(req.params.id)
    Project.findOne({ _id: cleanProjectId })
        .then((project) => res.status(200).json(project)) // requete ok
        .catch((error) => res.status(400).json({ error })) // bad request
}