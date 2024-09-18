const Empleado = require("../models/empleado");

const empleadoController = {};

// Obtener todos los empleados
empleadoController.getEmpleados = async (req, res) => {
  const empleados = await Empleado.find();

  res.json(empleados);
};


// Crear un nuevo empleado

empleadoController.createEmpleados = async (req, res) => {
  const empleado = new Empleado(req.body);

  await empleado.save();

  res.json({
    status: "Empleado guardado",
  });
};

// Obtener un único empleado
empleadoController.getUnicoEmpleado = async (req, res) => {
  const empleadoUnico = await Empleado.findById(req.params.id);

  res.json(empleadoUnico);
};


// Actualizar un empleado
empleadoController.editarEmpleado = async (req, res) => {
  const { id } = req.params;

  const emepleadoEdit = {
    nombre: req.body.nombre,

    cargo: req.body.cargo,

    oficina: req.body.oficina,

    salario: req.body.salario,
  };

  await Empleado.findByIdAndUpdate(id, { $set: emepleadoEdit }, { new: true });

  res.json({ status: "Empleado Actualizado" });
};


// Eliminar un empleado
empleadoController.eliminarEmpleado = async (req, res) => {
  await Empleado.findByIdAndDelete(req.params.id);

  res.json({ status: "Empleado Eliminado" });
};


// Exportar el módulo
module.exports = empleadoController;
