const mysql = require('mysql2/promise')
require('dotenv').config({ path: '../.env'})

const conn = mysql.createPool({
    server: process.env.DBhost,
    user: process.env.DBuser,
    password: process.env.DBpassword,
    database: process.env.DBname,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = { conn }