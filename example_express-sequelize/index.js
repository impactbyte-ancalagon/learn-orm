const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/users/", require("./routes/users")) // old

app.listen(8000, () => console.log(`Open localhost:8000`))
