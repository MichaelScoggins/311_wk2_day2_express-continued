const express = require('express')
const router = express.Router()
const productsControllers = require('./../controllers/products-controllers')

router.get('/products', productsControllers.listProducts)
router.get('/products/:userId', productsControllers.showProduct)
router.put('/products/:userId', productsControllers.updateProduct)
router.delete('/products/:userId', productsControllers.deleteProduct)
router.post('/products', productsControllers.createProduct)

module.exports = router