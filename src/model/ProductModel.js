const mongoose = require('../config/database')
const Schema = mongoose.Schema


// Modelo de dados do Produto no Banco
const ProductSchema = new Schema({
    code: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String},
    value_un: {type: Number, min: 0},
    value_un_sell: {type: Number, min: 0,required: true},
    amount: {type: Number, min: 0 , required: true},
    trigger: {type: Number, min: 0 , required: true},
    situation: {type: String, required: true},
    company: {type: String}

    
})

module.exports = mongoose.model('Product', ProductSchema)
