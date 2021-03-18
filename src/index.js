const express = require('express')
const server = express()
server.use(express.json())

const ProductRoutes = require('./routes/ProductRoutes') // importamos a rotas do ProdutoRoutes.js

server.use('/produto', ProductRoutes) // Sempre que requisitar um /produto na url ele vai chamr o arquivo de rotas 


// Inicialização do servidor para a api ficar online
server.listen(3000, () => {
    console.log('API ONLINE')
})