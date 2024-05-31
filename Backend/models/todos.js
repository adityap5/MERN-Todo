const mongoose = require('mongoose');
const uniqid = require('uniqid');
const todoschema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        default: () => uniqid()
      },
    title: {
        type: String,
        required: true,
    },
    body: String,
})

module.exports = mongoose.model('Todo', todoschema);