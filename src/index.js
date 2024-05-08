import express from 'express'
import mongoose from 'mongoose'
import schoolRouter from '../src/routes/school.route'
require('dotenv').config()
const app = express()
app.use(express.json())  
app.use('/api/school',schoolRouter)

mongoose.connect(process.env.MONG0)
    .then(db => console.log("db connected"))
    .catch(error => console.log(error.message))

app.listen(process.env.PORT, () => console.log(`express started at port ${process.env.PORT}`))