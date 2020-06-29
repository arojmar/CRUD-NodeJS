//Traemos la libreria de mysql
const mysql = require('mysql');

// creo una variable connection para guardar la conexion que hago a la 
// base de datos
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'phones_db'
});

// estaablezco la conexion a traves de la variable connectio y el metodo
// connect
connection.connect(error => {
    if(error) throw error;
    else console.log("Connected to " +  connection.config.database);
});

// exporto la conexion para que pueda ser utilizada en los otros ficheros
module.exports = connection;