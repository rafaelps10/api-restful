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

module.exports = {
    get,
}