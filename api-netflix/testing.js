const express = require("express")
const app = express()

const PORT = 3002

app.get("/", (request, response) => {
    response.json({ message: "HELLO IAM DEA API!" })
})

app.get("/movies", (request, response) => {
    console.log("ini api movie di hit!")
    response.json({ data: "movies blablablaaa" })
})

app.listen(PORT, () => {
    console.log("Server API jalan di port " + PORT)
})


