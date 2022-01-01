require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const db = require('./db/db')
// const insertQuestions = require('./routes/insertQuestion')
const createQuestionPaper = require('./routes/createQuestionPaper')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(insertQuestions)
app.use(createQuestionPaper)
const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})