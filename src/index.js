const express = require('express')
const server = express()

//Rota para acesso a API
server.get('/teste', (req, res) => {
    res.send('Mudei API')
})


// Inicialização do servidor para a api ficar online
server.listen(3000, () => {
    console.log('API ONLINE')
})