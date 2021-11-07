const { Client } = require('pg')

const db = new Client({
    user: 'postgres',
    host: 'localhost',
    password: process.env.DB_PASS,
    database: 'InfoStronksDB'
  })

module.exports = db