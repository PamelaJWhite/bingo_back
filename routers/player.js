//import express
const express = require("express")
//use express

//I added these three lines to fix the cors problem
var cors = require('cors')
var app = express()
app.use(cors())

//create a router object to handle the routes
const router = express.Router()

// //import middleware
// let auth = require("../middleware/auth")

//import controllers (for player)
controllers = require("../controllers/player")

//establish routes
// // POST /login
// router.post("/login", controllers.login)

//GET/ list of all ffb phrases
router.get("/", controllers.getAll)




//export router object so routes can be used elsewhere in the code
module.exports = router
