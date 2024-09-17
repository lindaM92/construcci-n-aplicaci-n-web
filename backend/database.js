/* 

  const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/GESTION-EMPLEADOS')
  .then(() => console.log('Base de datos conectada'))
  .catch(err => console.error('Error de conexión:', err));


 const URI = 'mongodb://localhost/empleados'; 
 mongoose.connect(URI)
     .then(db => console.log('DB is connected'))
     .catch(err => console.error(err));  
 module.exports = mongoose;  */

 //////////
 // backend/database.js
const mongoose = require('mongoose');

// Usa una URI de conexión consistente
const URI = 'mongodb://127.0.0.1:27017/GESTION-EMPLEADOS'; 

mongoose.connect(URI)
  .then(() => console.log('Base de datos conectada'))
  .catch(err => console.error('Error de conexión:', err));

module.exports = mongoose; // Exporta la instancia de mongoose para otros módulos

