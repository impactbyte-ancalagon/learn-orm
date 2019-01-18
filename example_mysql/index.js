const mysql = require("mysql2")

const connection = mysql.createConnection({
  host: "localhost",
  user: "haidar",
  password: "Notpassword!0",
  database: "todo_app"
})

connection.execute("SELECT * FROM `users`", function(err, results, fields) {
  results.forEach(item => {
    console.log(item)
  })
  console.log(fields)
})
