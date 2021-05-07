const mongoose = require('mongoose')
const { Schema } = mongoose

const Todo = new Schema({
    title: String,
    body: String
})

module.exports = mongoose.model('Todo', Todo)