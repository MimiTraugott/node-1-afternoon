
const products = require('../products.json')

const getProducts = (req, res) => {
    const item = products.find(val => val.id === parseInt)
    res.status(200).send(products)
}


module.exports = getProducts


