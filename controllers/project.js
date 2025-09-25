const Project = require('../models/Project')
const sanitize = require('mongo-sanitize')
const fs = require('fs')
const path = require('path')

//logique recherche des projets
exports.ProjectList = (req, res, next) => {
    Project.find()
        .then((projects) => 
            res.status(200).json(projects)) // requete ok
        .catch((error) => res.status(500).json({ error })) //erreur serveur
}

//logique de recherche de projet sous id
exports.findProject = (req, res, next) => {
    const cleanProjectId = sanitize(req.params.id)
    Project.findOne({ _id: cleanProjectId })
        .then((project) => res.status(200).json(project)) // requete ok
        .catch((error) => res.status(400).json({ error })) // bad request
}

//logique suppresion de projets

exports.deleteProject = (req, res, next) => {
    const cleanProject = sanitize(req.params.id)

    Project.findOneAndDelete({ _id: cleanProject })
        .then((oldProjet) => {
            const oldImageName = oldProjet.imageUrl.split('/').pop()
            const oldImagePath = path.join(
                __dirname,
                '..',
                'images',
                oldImageName
            )
            fs.unlink(oldImagePath, (err) => {
                if (err) {
                    res.status(500).send(
                        //erreur serveur
                        'Une erreur est survenue lors de la suppression de l image.'
                    )
                } else {
                    res.status(200).json({ message: 'Projet supprimé!' }) //requete ok
                }
            })
        })
        .catch((error) => {
            res.status(403).json(error) //forbidden
        })
}