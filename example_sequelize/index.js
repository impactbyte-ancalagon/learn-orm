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

const newUser = {
  username: "mhaidarhanif",
  email: "mhaidarhanif@gmail.com",
  password: "helloworld",
  name: "M Haidar Hanif"
}

User.sync({ force: true }).then(() => {
  return User.create(newUser).then(data => {
    console.log(data.user)
  })
})

User.findAll({
  raw: true
}).then(users => {
  console.log(users)
})
