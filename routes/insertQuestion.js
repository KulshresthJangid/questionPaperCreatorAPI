const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Question = require('../models/question')
const Data = require('../models/data.json')

router.get('/saveTheJsonData', (req, res) => {
    let counter = 0
    Data.forEach((el) => {
        const newQuestion = new Question({
            question: el.question,
            subject: el.subject,
            topic: el.topic,
            difficulty: el.difficulty,
            marks: el.marks
        })
        console.log(newQuestion)
        newQuestion.save(function(err, data) {
            if(err) {
                console.log(err)
            } else {
                console.log(data)
            }
        })
        counter++
    })
    if(counter === Data.length) {
        res.send("Data is saved")
    } else {
        res.send("We couldn't able to save all the data")
    }
    
})



module.exports = router