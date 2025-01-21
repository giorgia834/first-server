const express = require('express')
const cors = require('cors')
const app = express() //always use as express convention

const logger = require("./logger")

//Middleware
app.use(cors())
app.use(express.json())
app.use(logger) //to run on any request

const fruitsRouter = require("./routes/fruits") //





app.get('/', (req, res) => {
  res.send('Hello Fruity!')
})

app.use('/fruits', fruitsRouter) //

module.exports = app



