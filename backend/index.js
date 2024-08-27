import express, { response } from "express"
import { PORT, mongodbURL } from "./config.js"
import mongoose from "mongoose"
import { Book } from "./models/bookmodel.js"
import booksRoute from './route/bookRoutes.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to MERN stack tutorial')
})
// app.use(cors({
//     origin: 'http://localhost:5555/',
//     methods: ['GET', 'PUT', 'POST', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }))

app.use('/books', booksRoute);
mongoose
    .connect(mongodbURL)
    .then(() => {
        console.log("app connected to db")
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })
