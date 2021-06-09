const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    brand: String,
    category: String,
    price: Number,
    serie: String,
    quantity: Number,
})

const Model = mongoose.model('products', schema)

module.exports = Model