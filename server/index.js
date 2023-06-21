import express from 'express'
import cors from "cors"
import bcrypt from "bcrypt"

const app = express()
const port = 8080


app // Middleware :
    .use(express.json({ limit: "30mb", extended: true })) // json body parser
    .use(express.urlencoded({ limit: "30mb", extended: true }))
    .use(cors())


// api roots
app.get('/', (req, res) => {
    res.json({ "AL HAMDOULILAH": "ALLAHU AKBAR" })
})


