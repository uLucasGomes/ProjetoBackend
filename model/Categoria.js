const mongoose = require('mongoose')

const CategoriaSchema = mongoose.Schema({
    nome: { type: String, unique:true },
    nick: { type: String, unique:true },
    rank: { type: String, unique:true },
    personagem: { type: String, unique:true },
    fone: { type: String, unique:true },
    status: { type:String, enum: ['ativo','inativo'], default:'ativo'},
    foto: {
        originalName: {type:String},
        path: {type:String},
        size: {type:Number},
        mimetype: {type:String}
    }
},{timestamps:true})

module.exports = mongoose.model('categoria',CategoriaSchema)