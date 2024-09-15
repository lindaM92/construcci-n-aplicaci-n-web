const { Router } = require('express');
const router = Router();
const empleadoController = require('../controllers/empleado.controller');

router.get('/', empleadoController.getAllEmpleados);
router.post('/', empleadoController.createEmpleado);
// Otras rutas...

module.exports = router;
