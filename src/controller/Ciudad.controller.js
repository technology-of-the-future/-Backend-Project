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

CiudadesCtrl.login = async(req,res)=>{
    const {correo,contrasena} = req.body
    const ciudad = await Ciudad.findOne({correo:correo})
    if(!ciudad){
        return res.json({
            mensaje: 'Correo incorrecto'
        })
    }

    const match = await bcrypt.compare(contrasena, ciudad.contrasena)
    if(match){

        const token = jwt.sign({_id: ciudad._id}, 'Secreta')
        res.json({
            mensaje: 'Bienvenido',
            id:ciudad.id,
            nombre: ciudad.nombre,
            token

        })

    }

    else {
        res.json({
            mensaje: 'Contraseña incorrecta'
        })


    }
}

module.exports = CiudadesCtrl