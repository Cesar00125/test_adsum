const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'db_angular'
});

connection.connect((err)=> {
    if (err) {
        console.log(`Ha ocurrido un error: ${err}`)
    } else {
        console.log('Conexion exitosa')
    }
});

module.exports = connection;