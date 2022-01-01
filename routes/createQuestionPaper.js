const express = require('express')
const mongoose = require('mongoose')
const { create } = require('../models/question')
const question = require('../models/question')
const router = express.Router()
const { checkParts, createRandom, returnQuestions } = require('../utils/utils')

router.post('/createQuestionPaper',async (req, res) => {
    const obj = {
        marks: req.body.marks,
        easy: req.body.difficulty.easy,
        medium: req.body.difficulty.medium,
        hard: req.body.difficulty.hard
    }
    let easy = obj.easy
    let medium = obj.medium
    let hard = obj.hard
    let totalMarks = obj.marks
    let marksForEasyQuestions = 5
    let marksForMediumQuestion = 10
    let marksForHardQuestion = 15
    let statisfies = await checkParts(easy, medium, hard, totalMarks)
    if(statisfies == false) {
        res.send({
            error: true,
            message: `Please enter marks of each part only under ${obj.marks}`
        })
    }
    let numberOfEasyQuestion = easy/marksForEasyQuestions
    let numberOfMediumQuestion = medium/marksForMediumQuestion
    let numberOfHardQuestion = hard/marksForHardQuestion
    
    let randomArrForEasy = await createRandom(0, numberOfEasyQuestion, numberOfEasyQuestion)
    let randomArrForMedium = await createRandom(0, numberOfMediumQuestion, numberOfMediumQuestion)
    let randomArrForHard = await createRandom(0, numberOfMediumQuestion, numberOfHardQuestion)
    let easyQuestions = await returnQuestions(randomArrForEasy, "Easy")
    let mediumQuestions = await returnQuestions(randomArrForMedium, "Medium")
    let hardQuestions = await returnQuestions(randomArrForHard, "Hard")


    res.send({
        easyQuestions,
        mediumQuestions,
        hardQuestions
    })
    
})

module.exports = router