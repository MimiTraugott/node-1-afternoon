
const products = require('../products.json')

const getProducts = (req, res) => {
    try {
        let item = products.find(val => val.id === parseInt(req.params.id))
        res.status(200).send(item)
    }
}

module.exports = getProducts


