const { Router } = require("express");
const router = Router();
const empleadoController = require("../controllers/empleado.controller");
/**
 * Vamos a crear rutas del servidor
 * creamos un módulo por eso utilizamos express
 * vamos a utilizar como nuestra rest api para
 * enviar y recibir datos en formato json
 */
const express = require("express");

router.get("/", empleadoController.getEmpleados);
router.post("/", empleadoController.createEmpleados);

// Otras rutas...

/* generamos un ejemplo cuando le soliciten
algo al servidor por el método GET **/

router.get("/status", (req, res) => {
  res.json({
    status: "API REST funcionando",
  });
});
module.exports = router;
