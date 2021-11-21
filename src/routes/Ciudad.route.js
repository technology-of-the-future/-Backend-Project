const {Router} = require('express')
const router = Router()
const ciudadCtrl = require('../controller/Ciudad.controller')

router.post('/crear',ciudadCtrl.crearCiudad)

module.exports = router