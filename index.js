const express = require("express")
let app = express()
// enable the app to parse JSON bodies in post/put
app.use(express.json())

//I added these two lines to try to fix the cors problem
let cors = require('cors')
app.use(cors())

require("dotenv").config()

let mysql = require("./db/db")

let PORT = process.env.PORT

//get access to the player.js file in the router folder
let playerRoutes = require("./routers/player")
//and use it
app.use(playerRoutes)

// //get access to the admin file in the router folder
let adminRoutes = require("./routers/admin")
//and use it
app.use(adminRoutes)

//testing connection
app.get("/mysql", function(req, res){
    //select now() is a mysql func that gives time and date
    mysql.query("select now()", function(error, rows){
        if(error) {
            console.error("mysql query failed", error)
        } else {
          console.log("I will be so impressed if this works!")
          res.json(rows)
        }
    })
})
//this shows my main page
app.get("/", function(req, res){
    console.log("bingo?")
    res.send("connected to bingo index.js")
})
 
app.listen(PORT, function(){
    console.log("Leeeeeet's go! on port: ", PORT)
})