const { Schema, model } = require('mongoose');

const RegistrarFincaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El Nombre es obligatorio']
    },
    area: {
        type: String,
        required: [true, 'El Área es obligatoria']
    },
    valor: {
        type: Number,
        required: [true, 'El Valor es obligatorio']
    },
    cultivos: {
        type: String,
        required: [true, 'El cultivo es obligatorio']
    }
});

module.exports = model('RegistrarFinca', RegistrarFincaSchema);