const {Router} = require('express')
const router = Router()
const PersonaCtrl = require('../controller/Persona.controller')
const Auth = require('../helper/Auth')

router.post('/crear',Auth.verificarToken, PersonaCtrl.crear)
router.get('/listarPersonas',Auth.verificarToken ,PersonaCtrl.listar)
router.get('/listar/:id',Auth.verificarToken ,PersonaCtrl.listarId)
router.get('/listarCriterio/:criterio',Auth.verificarToken ,PersonaCtrl.buscarPersonaCriterio)
router.delete('/eliminar/:id',Auth.verificarToken ,PersonaCtrl.eliminar)
router.put('/actualizar/:id',Auth.verificarToken ,PersonaCtrl.actualizar)
router.get('/listarPersonasCiudad/:id',Auth.verificarToken ,PersonaCtrl.personaDeUnaCiudad)


module.exports = router