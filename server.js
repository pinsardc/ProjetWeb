const express = require('express')
const app = express()

const path = require('path')
app.use(express.static(path.join(__dirname, 'dist/')))

var apiController = require('./src/api')
app.use('/api', apiController)

var port = process.env.PORT || 4000
app.listen(port, function () {
    console.log("Server started at port 4000");
})

require('dotenv').config()