const mysql = require('mysql2/promise')
require('dotenv').config({ path: '../.env'})

const pool = mysql.createPool({
    host: process.env.DBhost || "memote.czmyyf1cpqym.us-east-1.rds.amazonaws.com",
    user: process.env.DBuser || "admin",
    password: process.env.DBpassword || "memote_password",
    database: process.env.DBname || "memote",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


module.exports = { pool }