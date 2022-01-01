const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    question: {
        type: String
    }, subject: {
        type: String
    }, topic: {
        type: String
    }, difficulty: {
        type: String
    }, marks: {
        type: String
    }
})

module.exports = mongoose.model('Question', questionSchema)