const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gestion-empleados', {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
.then(db => console.log('Base de datos conectada'))
.catch(err => console.error(err));
