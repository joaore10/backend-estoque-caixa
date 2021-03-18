const express = require('express')
const router = express.Router()

const ProductController = require('../controller/ProductController') //controller do model

router.post('/', ProductController.create ); //rota post chamando a função que cria o produto no ProductController.js

module.exports = router;