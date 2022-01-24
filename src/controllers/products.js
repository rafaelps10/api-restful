const ProductsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params

    const obj = id ? { _id: id} : null //IF TERNÁRIO

    /*let obj = {} // PODE SER FEITO ASSIM, MAS O IF TERNÁRIO É MAIS INDICADO

    if (id) {
        obj._id = id
    }*/

    const products = await ProductsModel.find(obj)

    res.send(products)
}

async function post(req, res) {
    const {
        name,
        brand,
        price,
    } = req.body

    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message: 'success'
    })
    
}

async function put(req, res) {
    const{ id } = req.params

    const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })  // quando obrigatório retornar o produto

    res.send({
        message: 'success',
        product,
    })

   /*  
   const product = await ProductsModel.findOne({ _id: id }) // quando não obrigatório retornar o produto

    await product.updateOne(req.body)

    res.send({
        message:'sucess',
        product,
    }) 
    */
}

async function remove(req, res) {
    const { id } = req.params

    const remove = await ProductsModel.deleteOne({ _id: id })

    let message = 'success'

    if (!remove.ok) {
        message: 'error'
    }

    //const message = remove.ok ? 'success' : 'error' // O IF TERNÁRIOO NO MEU POSTMAN NÃO FUNCIONOU CORRETAMENTE. ME RETORNOU A MENSAGEM DE ERRO AO INVÉS DE SUCESSO!

    res.send({
        message: 'success'
    })
}

module.exports = {
    get,
    post,
    put,
    remove,
}