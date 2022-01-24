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

module.exports = {
    get,
    post,
}