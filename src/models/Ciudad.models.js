const mongoose = require('mongoose')
const {Schema} = mongoose

const CiudadSchema = new Schema({
    nombre:String,
    correo:String,
    contrasena:String,
    date:{type:Date,default:Date.now}
    //Convertir modelo
})

module.exports = mongoose.model('ciudad',CiudadSchema)