const { response } = require("express");

const VacunacionAnimal = require("../models/registroVacunacionAn");

const vacunacionAnimalGet = async (req, res = response) => {
  const vacunacionesAnimales = await VacunacionAnimal.find();

  res.json({
    vacunacionesAnimales,
  });
};

const vacunacionAnimalPost = async (req, res) => {
  const body = req.body;
  let mensaje = "Registro de Vacunación de Animal creado.";

  try {
    const vacunacionAnimal = new VacunacionAnimal(body);
    await vacunacionAnimal.save();
  } catch (error) {
    mensaje = "Problemas al crear un registro de Vacunación de Animal.";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

const vacunacionAnimalPut = async (req, res) => {
  const { _id, numeroServicio, nombreCliente, nombreEspecie, valorVacuna, cantidadVacunas } = req.body;
  let mensaje = "Modificación exitosa";

  try {
    await VacunacionAnimal.findOneAndUpdate({ _id: _id }, { 
      numeroServicio: numeroServicio, 
      nombreCliente: nombreCliente, 
      nombreEspecie: nombreEspecie, 
      valorVacuna: valorVacuna, 
      cantidadVacunas: cantidadVacunas 
    });
  } catch (error) {
    mensaje = "Problemas al modificar";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

const vacunacionAnimalDelete = async (req, res = response) => {
  const { _id } = req.body;
  let mensaje = "Eliminación exitosa";
  try {
    await VacunacionAnimal.deleteOne({ _id: _id });
  } catch (error) {
    mensaje = "Problemas al eliminar";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

module.exports = { 
  vacunacionAnimalGet, 
  vacunacionAnimalPost, 
  vacunacionAnimalPut, 
  vacunacionAnimalDelete 
};