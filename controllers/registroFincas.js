const { response } = require("express");

const RegistrarFinca = require("../models/registroFincas");

const registrarFincaGet = async (req, res = response) => {
  const registrarFincas = await RegistrarFinca.find();

  res.json({
    registrarFincas,
  });
};

const registrarFincaPost = async (req, res) => {
  const body = req.body;
  let mensaje = "Registro de Finca creado.";

  try {
    const registrarFinca = new RegistrarFinca(body);
    await registrarFinca.save();
  } catch (error) {
    mensaje = "Problemas al crear un registro de Finca.";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });

}
const registrarFincaPut = async (req, res) => {
  const { _id, nombre, area, valor, cultivos } = req.body;
  let mensaje = "Modificación exitosa";

  try {
    await RegistrarFinca.findOneAndUpdate({ _id: _id }, { nombre: nombre, area: area, valor: valor, cultivos: cultivos });
  } catch (error) {
    mensaje = "Problemas al modificar";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

const registrarFincaDelete = async (req, res = response) => {
  const { _id } = req.body;
  let mensaje = "Eliminación exitosa";
  try {
    await RegistrarFinca.deleteOne({ _id: _id });
  } catch (error) {
    mensaje = "Problemas al eliminar";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

module.exports = { 
  registrarFincaGet, 
  registrarFincaPost, 
  registrarFincaPut, 
  registrarFincaDelete };


