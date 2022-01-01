const mongoose = require('mongoose')
const Question = require('../models/question')

async function checkParts(easy, medium, hard, totalMarks) {
    let easyMarks = (easy/100) * totalMarks
    let mediumMarks = (medium/100) * totalMarks
    let hardMarks = (hard/100) * totalMarks

    if(easyMarks + mediumMarks + hardMarks === totalMarks) {
        return true
    }
    return false
}

async function createRandom(min, max, numberOfQuestions) {
    let arr = []
    for(let i = 1; i <= numberOfQuestions; i++) {
        let j = Math.floor(Math.random() * (max - min + 1)) + min
        if(arr.indexOf(j) === -1) {
            arr.push(j)
        } else {
            i--
        }
    }
    return arr
}

async function returnQuestions(arr, difficulty) {
    return new Promise(async (resolve, reject) => {
        try {
            let easyQuestion = await Question.find({ difficulty: difficulty })
            console.log(easyQuestion)
            let qarr = []
            console.log("This is incoming arr", arr)
            arr.forEach(el => {
                qarr.push(easyQuestion[el])
            })
            console.log("---------------------------", qarr)
            resolve(qarr)
        } catch (e) {
            console.log(`Error while getting ${difficulty} questions`, e)
            reject(e)
        }
    })
}

module.exports = {
    checkParts,
    createRandom,
    returnQuestions
}