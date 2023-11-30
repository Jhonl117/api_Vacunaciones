const { Schema, model } = require('mongoose');

const VacunacionAnimalSchema = Schema({
    numeroServicio: {
        type: String,
        required: [true, 'El número de servicio es obligatorio']
    },
    nombreCliente: {
        type: String,
        required: [true, 'El nombre del cliente es obligatorio']
    },
    nombreEspecie: {
        type: String,
        required: [true, 'El nombre de la especie es obligatorio']
    },
    valorVacuna: {
        type: Number,
        required: [true, 'El valor de la vacuna es obligatorio']
    },
    cantidadVacunas: {
        type: Number,
        required: [true, 'La cantidad de vacunas es obligatoria']
    }
});

module.exports = model('VacunacionAnimal', VacunacionAnimalSchema);