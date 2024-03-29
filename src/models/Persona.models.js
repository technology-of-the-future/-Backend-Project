const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ReservadosSchema = new Schema({
    nombres:{type:String, required:[true, 'Nombre obligatorio']},
    apellidos:String,
    ciudad:String,
    estadoReserva: String,
    cantidadPersonas: String,
    ciudadNombre: String,
    date:{type:Date,default:Date.now}
    //Convertir modelo
})

module.exports = mongoose.model('reservados',ReservadosSchema)
