const express = require("express")
const router = express.Router()
const Sequelize = require("sequelize")

const sequelize = new Sequelize(
  "socialmedia", // Database Name
  "haidar", // Database Username
  "Notpassword!0", // Database Password
  {
    host: "localhost", // Database host
    dialect: "mysql" // Database type
  }
)

const User = sequelize.define("user", {
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  name: Sequelize.STRING,
  username: Sequelize.STRING
})

router.get("/", (req, res) => {
  User.findAll({
    raw: true
  }).then(users => {
    res.send({
      data: users
    })
  })
})

router.post("/", (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
    name: req.body.name
  }

  User.create(newUser).then(data => {
    res.send({
      data
    })
  })
})

module.exports = router
