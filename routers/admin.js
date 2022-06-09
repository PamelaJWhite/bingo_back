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

//import controllers (for admin)
controllers = require("../controllers/admin")

//establish routes
//POST/ add a phrase
router.post("/add", controllers.addPhrase)

//GET to test GET
router.get("/getlist", controllers.getList)




//export router object so routes can be used elsewhere in the code
module.exports = router
