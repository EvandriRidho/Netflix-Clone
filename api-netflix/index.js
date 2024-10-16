const express = require("express")
const cors = require("cors")
const { OK, ERR } = require('./utils/response')

const app = express()
const PORT = 3002

app.use(express.json())
app.use(cors())

app.get("/", (request, response) => {
    const data = {
        isRunning: true,
        serverVersion: "1.0.0"
    }
    OK(response, 200, data, "success getting server main endpoint")
})

// melihat listing favorit movies kita
app.get("/my-movies", (request, response) => {
    const data = {
        id: 1,
        title: "Hero Hero",
        years: "2004"
    }
    OK(response, 200, data, "Success getting my-movies endpoint")
})

// menambahkan favorit movies
app.post("/my-movies", (request, response) => {
    console.log("inserting new favorite movies...")
    const data = request.body;
    console.log({ data })
    response.status(201).json({ message: "success" })
})

// menghapus favorite movies
app.delete("/my-movies/:id/:token", (request, response) => {
    console.log("delete favorite movies....")
    const { id, token } = request.params
    console.log({ id, token })
    response.status(204).json({ message: "success" })
})

// menambahkan data user untuk verifikasi sistem
app.post("/token", (request, response) => {
    console.log('creating user token to database....')
    const data = request.body
    console.log({ data })
    response.status(201).json({ message: "token created..." })
})

app.listen(PORT, () => {
    console.log("Server API jalan di port " + PORT)
})


