const empleadoController = {};

empleadoController.getAllEmpleados = (req, res) => {
   res.json({ message: 'List of employees' });
};

empleadoController.createEmpleado = (req, res) => {
   res.json({ message: 'Employee created' });
};

module.exports = empleadoController;
