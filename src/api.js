const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')
router.use(bodyParser.json())
const bcrypt = require('bcrypt')
const db = require('./db.js')
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
  isEmpty: function (callback, prod) {
    var prodList = prod.join();
    return db.query("SELECT * FROM produits WHERE id IN ( "+prodList+" ) AND quantity > 0", callback);
  },/*Je ne peux pas remplacer la valeur comme on fait d'habitude car j'utilise "IN" et une liste, or je ne peux pas avoir de
  crochets, et que cela ne fonctionne pas si je substitue par une chaine de caractères 
  (surement car cela fait une chaine dans la requête)*/
  updateQuantities: function (callback, prod) {
    var prodList = prod.join();
    return db.query('UPDATE produits SET quantity = quantity-1 WHERE id IN ( '+prodList+' ) ', 
     callback)
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

router.post('/CreateAccount', (req, res) => {
  var thisaccount = {
      NomEntree: req.body.username,
      PasswordEntree: req.body.password,
      EmailEntree: req.body.email
  }
  var ok = false
  
  User.getNom(function (err, rows) {

    if (typeof rows == 'undefined') {
      User.getEmail(function (err, rows) {
        if (typeof rows == 'undefined') {
          bcrypt.hash(thisaccount.PasswordEntree, 10, function(err, hash) {
            
            thisaccount.PasswordEntree = hash;
            User.register(function (err, rows) {
              ok = true
              res.json({
                  message: "Votre compte a bien été enregistré",
                  username: thisaccount.NomEntree,
                  email: thisaccount.EmailENtree,
                  ok: ok
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

router.post('/purchase', (req, res) => {
 idList = [];
 req.body.products.forEach(element => {
   idList.push(element.id);
 });
 User.isEmpty(function (err, rows) {
   listAchetes = [];
   listNoms = [];
   for (var i = 0; i < rows.rows.length; i++) {
    listAchetes.push(rows.rows[i].id)
   }
   User.updateQuantities(function (err, update) {

    res.json({
      listAchetes: listAchetes,
      ruptureList: idList.filter(x => !listAchetes.includes(x)),
    })
   }, listAchetes)
 }, idList)
})

module.exports = router