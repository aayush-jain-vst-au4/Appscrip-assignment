const express = require("express")
const app = express()
const cors = require('cors')
const user = require('./controllers/user')

app.use(cors())
app.use(express.json())

// CRUD operations for users table

app.post("/user", user.create)
app.get("/user", user.get)
app.put("/user/:id", user.put)
app.delete("/user/:id", user.delete)

module.exports = app