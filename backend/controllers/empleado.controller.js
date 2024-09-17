const empleadoController = {};

empleadoController.getAllEmpleados = (req, res) => {
   res.json({ message: 'Lista de empleadas' });
};

empleadoController.createEmpleado = (req, res) => {
   res.json({ message: 'Empleado creado' });
};

module.exports = empleadoController;
