const express = require("express")
const cors = require("cors")

const app=express()
app.use(cors())

app.get("/", (req, res) => {
    res.download("./resume.pdf")
})

app.listen(5000)