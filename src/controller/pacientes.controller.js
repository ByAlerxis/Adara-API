const Connection = require('mysql/lib/Connection');

try {
    let pacientesController = {};

    pacientesController.getAll = async (req, res) => {
        if (Connection) {
            await connection.query(
                "SELECT * FROM pacientes;",
                (err, rows) => {
                    if (err) {
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    }

    pacientesController.getId = async (req, res) => {
        if (Connection) {
            await connection.query(
                "SELECT * FROM pacientes WHERE id_paciente = '"+req.params.id_paciente+"';",
                (err, rows) => {
                    if (err) {
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    }

    pacientesController.post = async (req, res) => {
        if (Connection) {
            await connection.query(
                "INSERT INTO pacientes(nombre, edad, motivo, fecha, hora, asistencia, numero) VALUES ('"+req.body.nombre+"', '"+req.body.edad+"', '"+req.body.motivo+"', '"+req.body.fecha+"', '"+req.body.hora+"', '"+req.body.asistencia+"', '"+req.body.numero+"');",
                (err, rows) => {
                    if (err) {
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    }

    pacientesController.put = async (req, res) => {
        if (Connection) {
            const updates = [];
    
            if (req.body.nombre) updates.push(`nombre = '${req.body.nombre}'`);
            if (req.body.edad) updates.push(`edad = '${req.body.edad}'`);
            if (req.body.motivo) updates.push(`motivo = '${req.body.motivo}'`);
            if (req.body.fecha) updates.push(`fecha = '${req.body.fecha}'`);
            if (req.body.hora) updates.push(`hora = '${req.body.hora}'`);
            if (req.body.asistencia) updates.push(`asistencia = '${req.body.asistencia}'`);
            if (req.body.numero) updates.push(`numero = '${req.body.numero}'`);
    
            const updateString = updates.join(', ');
    
            if (updateString) {
                await connection.query(
                    `UPDATE pacientes SET ${updateString} WHERE id_paciente = '${req.params.id_paciente}';`,
                    (err, rows) => {
                        if (err) {
                            // Manejo de errores
                        } else {
                            res.status(200).json(rows);
                        }
                    }
                );
            } else {
                res.status(400).json({ error: 'Nada que actualizar' });
            }
        }
    };

    module.exports = pacientesController;
} catch (error) {
    
}