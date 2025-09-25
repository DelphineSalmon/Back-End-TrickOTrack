const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
   
    title: { type: String, required: true },
    designer: { type: String, required: true },
    categorie: { type: String, required: true },
    fil: { type: String, required: true },
    size: { type: String, required: true },
    debut: { type: Number, required: true },
    fin: { type: Number, required: true },
    aiguilles: { type: Number, required: true },
    picture: { type: String, require: true },
    cover: { type: String, require: true },
    langue: { type: String, required: true },
    patron: { type: String, required: true },
    echantillon: { type: String, required: true },
    note: { type: String, required: true },
    statut: { type: String, required: true },
    difficulte: { type: String, required: true },
    userId: { type: String, required: true },
}
,{
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;   // ajouter "id"
      delete ret._id;     // supprimer "_id"
    }
  }})

module.exports = mongoose.model('project', projectSchema,'project')