const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')
router.use(bodyParser.json())
//var db = require('./db')
const bcrypt = require('bcrypt')
const { Client } = require('pg')

const db = new Client({
  user: 'postgres',
  host: 'localhost',
  password: process.env.DB_PASS,//dotenv : process.env.DB_PASS
  database: 'InfoStronksDB'
})
db.connect()

var User = {
  getUser: function (callback, account) {
      return db.query('SELECT * FROM utilisateurs WHERE email = $1', 
      [account.EmailEntree], callback)
  },
  getNom: function (callback, account) {
      return db.query('SELECT * FROM utilisateurs WHERE username = ?', 
      [account.NomEntree],callback)
  },
  getEmail: function (callback, account) {
      return db.query('SELECT * FROM utilisateurs WHERE email = ?', 
      [account.EmailEntree], callback)
  },
  register: function (callback, account){
      return db.query('INSERT INTO utilisateurs (username,email,password) VALUES ($1,$2,$3) ', 
      [account.NomEntree,account.EmailEntree,account.PasswordEntree], callback)
  }, 
}


router.post('/connect', (req, res) => {   
  var thisaccount = {
      EmailEntree: req.body.email,
      PasswordEntree: req.body.password
  }
  User.getUser(function (err, rows) {
      if (rows.rowCount > 0) {
        bcrypt.compare(thisaccount.PasswordEntree, rows.rows[0].password, function(err, result) {
          if (result) {
            res.json({
              message: 'Vous êtes connecté !',
              username: rows.rows[0].username
            })
          }
          else {
            res.json({
              message: 'Erreur, le mot de passe est incorrect'
            })
          }
        });
      } else {
          res.json({
              message: 'Erreur, cet adresse mail n\'existe pas'
          })
      }
  }, thisaccount)
})

// A SUPPIRMER ?
router.post('/allowCreation', (req, res) => {   
  var thisaccount = {
      NomEntree: req.body.username,
      PasswordEntree: req.body.password
  }
  User.getNom(function (err, rows) {
      if (rows.length > 0) {
          res.json({
              message: 'L\'identifiant est déjà utilisé'
          })
      } else {
          res.json({
              message: 'Rien'
          })
      }
  }, thisaccount)
})

router.post('/CreateAccount', (req, res) => {
  var thisaccount = {
      NomEntree: req.body.username,
      PasswordEntree: req.body.password,
      EmailEntree: req.body.email
  }
  
  User.getNom(function (err, rows) {

    if (typeof rows == 'undefined') {
      User.getEmail(function (err, rows) {
        if (typeof rows == 'undefined') {
          bcrypt.hash(thisaccount.PasswordEntree, 10, function(err, hash) {
            
            thisaccount.PasswordEntree = hash;
            var x = User.register(function (err, rows) {
              res.json({
                  message: "Votre compte a bien été enregistré",
                  username: thisaccount.NomEntree,
                  email: thisaccount.EmailENtree
              })
            }, thisaccount)
          });
          
        }
        else {
            
          res.json({
            message: "L\'adresse email est déjà utilisée"
          })
        }
      }, thisaccount)
    }
    else {
      res.json({
        message: 'L\'identifiant est déjà utilisé'
      })
    }
  }, thisaccount)
})

router.get('/test', (req, res) => {
    get_test().then((result)=>{
        bcrypt.compare("blablabla", "$2a$10$87fIe/u/3jDIQWWrIgYvM.e6esirEfiuRKNhIzOy5kV5oHA5be8DK", function(err, mdpResult) {
            console.log(mdpResult);
      });
      res.status(200).json(result.rows)//.json(mdpResult)
    })
  
    async function get_test () {
      var sql = "select * from utilisateurs"
      return await db.query({
        text: sql,
      })
    }
  })

  router.get('/truc', (req, res) => {
    res.json({message:"Ca marche"});
  })

  module.exports = router