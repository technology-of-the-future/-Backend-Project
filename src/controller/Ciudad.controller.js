const CiudadesCtrl = {}
const Ciudad = require('../models/Ciudad.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

CiudadesCtrl.crearCiudad = async(req,res)=>{
    const{nombre,correo,contrasena} = req.body
    const NuevaCiudad = new Ciudad({
        nombre,
        correo,
        contrasena
    })


const correoCiudad = await Ciudad.findOne({correo:correo})
if(correoCiudad)
{
    res.json({
        mensaje: 'El correo ya existe'
    })
}
else {
    NuevaCiudad.contrasena = await bcrypt.hash(contrasena,10)
    const token = jwt.sign({_id: NuevaCiudad._id},"Secreto")
    await NuevaCiudad.save()

    res.json({
        mensaje: 'Bienvenido',
        id: NuevaCiudad._id,
        nombre: NuevaCiudad.nombre,
        token
    })

}

}

module.exports = CiudadesCtrl