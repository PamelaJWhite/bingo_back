let db = require("../db/db")

//use bcrypt
const bcrypt = require("bcrypt")

//use jsonwebtoken
const jwt = require("jsonwebtoken")
const e = require("express")


//admin can add phrases
let addPhrase = function(req, res){
    console.log("admin addPhrase()")

    let phrase = req.body.phrase
    let type = req.body.type
    let sql = `INSERT INTO ffblist(phrase, type) values (?, ?)`
  db.query(sql, [phrase, type], function(err, rows) {
      if(err){
          console.error("failed to add phrase to ffblist table, phrase column", err)
          res.status(500).send("failed to add phrase to ffblist table, phrase column")
      } else {
          console.log("crated new phrase for ffblist table", rows)
          res.json(rows);
      }
  })
    
}


//this is the same as the getAll on player, except that the route is /getlist
let getList = function(req, res){
  console.log("player getList()")

  //get all the titles and story_ids from the stories table
  let sql = `SELECT * FROM ffblist`
  db.query(sql, function(err, rows) {
      if(err){
          console.error("failed to get all ffblist: ", err)
          res.status(500).send("failed get all ffblist")
      } else {
          console.log("ffblist:", rows)
          res.json(rows);
      }
  })
  
}

 //export controllers
module.exports = {
    // login,
    addPhrase, 
    getList
} 

  