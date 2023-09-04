try {
    const mysql = require('mysql');

    function handleDisconnect() {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'adara'
        });

        connection.connect(function(err){
            if (err) {
                console.log('Error al conectar a la base de datos: ' + err);
                setTimeout(handleDisconnect, 2000);
            } else {
                console.log('Conectado a la base de datos.');
            }
        });

        connection.on('error', function(err){
            console.log('Error en la base de datos', err);
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                handleDisconnect();
            } else {
                throw err;
            }
        })

        module.exports = connection;
    }

    handleDisconnect();

} catch (error) {
    
}