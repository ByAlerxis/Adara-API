const Connection = require('mysql/lib/Connection');

try {
    let doctorController = {};

    doctorController.getAll = async (req, res) => {
        if (Connection) {
            await connection.query(
                "SELECT * FROM doctor;",
                (err, rows) => {
                    if (err) {

                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    }

    module.exports = doctorController;
} catch (error) {
    
}