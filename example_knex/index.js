const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "haidar",
    password: "Notpassword!0",
    database: "todo_app"
  }
})

knex
  .select("name", "username", "email")
  .from("users")
  .then(result => {
    console.log(result)
  })
