try {
    const express = require('express');
    const app = express();
    const morgan = require('morgan');
    const bodyParser = require('body-parser');
    const cors = require('cors');

    const connection = require('./src/database/database');
    const port = process.env.PORT || 3000;

    // Configuracion
    app.set('port', port);

    // Middlewares
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(cors({origin: '*'}));

    // Rutas
    app.use('/api/doctor', require('./src/router/doctor.routes'));
    app.use('/api/pacientes', require('./src/router/pacientes.routes'));

    // Servidor
    app.listen(port, () => {
        console.log('Servidor en el puerto: ' + port);
    });
} catch (error) {
    
}