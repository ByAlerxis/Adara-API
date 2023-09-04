try {
    const express = require('express');
    const router = express.Router();
    const doctorController = require('../controller/doctor.controller')

    router.get('/getAll', doctorController.getAll);

    module.exports = router;
    
} catch (error) {
    
}