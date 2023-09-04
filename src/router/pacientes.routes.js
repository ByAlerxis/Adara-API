try {
    const express = require('express');
    const router = express.Router();
    const pacientesController = require('../controller/pacientes.controller');

    router.get('/getAll', pacientesController.getAll);
    router.get('/getId/:id_paciente', pacientesController.getId);
    router.post('/post', pacientesController.post);
    router.put('/put/:id_paciente', pacientesController.put);

    module.exports = router;
    
} catch (error) {
    console.error("Error en las rutas:", error);
}