const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')//Nécessaire

require('dotenv').config({ path: './src/Variables.env' })

app.use(express.static(path.join(__dirname, 'dist/')))
app.use(cors())//Nécessaire

var apiController = require('./src/api')
app.use('/api', apiController)

var port = process.env.PORT || 4000
app.listen(port, function () {
    console.log("Server started at port 4000");
})