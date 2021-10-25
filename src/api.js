const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  password: process.env.DB_PASS,//dotenv : process.env.DB_PASS
  database: 'InfoStronksDB'
})
//dzdzdd
client.connect()

router.get('/test', (req, res) => {
    get_test().then((result)=>{
        bcrypt.compare("blablabla", "$2a$10$87fIe/u/3jDIQWWrIgYvM.e6esirEfiuRKNhIzOy5kV5oHA5be8DK", function(err, mdpResult) {
            console.log(mdpResult);
          // result == true
      });
      res.status(200).json(result.rows).json(mdpResult)
    })
  
    async function get_test () {
      var sql = "select * from utilisateur"
      return await client.query({
        text: sql,
      })
    }
  })

  router.get('/truc', (req, res) => {
    res.json({message:"Ca marche"});
  })

  module.exports = router