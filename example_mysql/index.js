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
})

connection.execute("SELECT * FROM `todos`", function(err, results, fields) {
  results.forEach(item => {
    console.log(item)
  })
})

// ALTER USER 'haidar'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Notpassword!0';
