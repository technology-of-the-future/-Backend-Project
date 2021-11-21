const {Router} = require('express')
const router = Router()
const ciudadCtrl = require('../controller/Ciudad.controller')

router.post('/crear',ciudadCtrl.crearCiudad)
router.post('/login',ciudadCtrl.login)

module.exports = router