const express = require("express")
const database = require("./database")
const bookRoute = require("./routes/book.route")

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

database.sync({ force: true }).then(() => {
    console.info("database synced")
}).catch(err => {
    console.error("failed to sync database: " + err.message)
    process.exit(1)
})

app.get("/", (req, res) => {
    res.json({
        message: "Node.js Book REST API Server"
    })
})

app.use("/api/books", bookRoute)

app.listen(port, () => console.log(`Server up and running on port ${port}`))
