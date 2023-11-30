const { Router } = require('express');
const route = Router();

// Importar métodos del controlador actualizado
const { vacunacionAnimalGet, vacunacionAnimalPost, vacunacionAnimalPut, vacunacionAnimalDelete } = require('../controllers/registroVacunaciónAn');

route.get('/', vacunacionAnimalGet);

route.post('/', vacunacionAnimalPost);

route.put('/', vacunacionAnimalPut);

route.delete('/', vacunacionAnimalDelete);

module.exports = route;