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
        message: 'sucess'
    })
    
}

async function put(req, res) {
    const{ id } = req.params

    const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })  // quando obrigatório retornar o produto

    res.send({
        message: 'sucess',
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

module.exports = {
    get,
    post,
    put,
}