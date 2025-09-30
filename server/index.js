const express = require("express")
const cors = require("cors")
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

app.use("/", authRoutes)

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})



