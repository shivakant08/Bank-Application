const express = require("express")
const cors = require("cors")
const bcrypt = require("bcrypt")
const database = require("./config/db.js")
const jwt = require("jsonwebtoken")
const authRoutes = require("./routes/authRoutes.js")

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.get("/", async (req, res) => {
    try {
        res.status(200).json("Hello, Welcome to the Thoko Bank Application")
    } catch (error) {
        res.status(400).json(error)
    }
})


/// REGISTER USER

app.use("/", authRoutes)


app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})