const mysql = require('mysql');
const{ DB_USER, DB_PASSWORD, DB_HOST, DATABASE } = process.env;


const config = {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DATABASE,
    charset: 'utf8'
}

const client = mysql.createPool(config);

// keep the connection alive
setInterval(() =>{
    client.query(`SELECT 1`);
}, 4500);

module.exports = client;

