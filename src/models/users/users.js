const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    age: Number,
    email: String,
    city: String,
    state: String
})

const Model = mongoose.model('users', schema)

module.exports = Model