const mongoose = require('mongoose');

// Usa una URI de conexión consistente
const URI = 'mongodb://127.0.0.1:27017/GESTION-EMPLEADOS'; 

mongoose.connect(URI)
  .then(() => console.log('Base de datos conectada'))
  .catch(err => console.error('Error de conexión:', err));

module.exports = mongoose; // Exporta la instancia de mongoose para otros módulos

