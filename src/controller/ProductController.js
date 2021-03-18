const ProductModel = require('../model/ProductModel')

class ProductController {

    //FUNÇÃO QUE COLOCA OS DADOS  DO PRODUTO NO BANCO DE DADOS
    async create(req,res){
        // cria um model de product com o body da requisição
        const product = new ProductModel(req.body)

        // salva o produto no banco de dados 
        await product.save().then(response => { //se der certo mostra o 200 e retorna o dado
            return res.status(200).json(response)
        }).catch(error => {  //se nao mostra o 500 e retorna o erro
            return res.status(500).json(error)
        })
    }


}

module.exports = new ProductController();