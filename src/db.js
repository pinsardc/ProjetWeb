//LANCER LE SERVEUR : npm run serve
//LANCER L'API : node server.js
const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    password: process.env.DB_PASS,//dotenv : process.env.DB_PASS
    database: 'InfoStronksDB'
  })

module.exports = client