const { Router } = require('express') //Desestructuración. Extraer un atributo de un objeto.

const route = Router()

//Importar métodos del controlador
const { registrarFincaGet, registrarFincaPost, registrarFincaPut, registrarFincaDelete } = require('../controllers/registroFincas')

route.get('/', registrarFincaGet)

route.post('/', registrarFincaPost)

route.put('/', registrarFincaPut)

route.delete('/', registrarFincaDelete)

module.exports = route