let products = require('./../data/products')
let counter = products.length + 1

//list
const listProducts = (req, res) => res.json(products)
//show
const showProduct = (req, res) => {
  const user = products.find(i => i_id == req.params.userId)
  console.log(user)
  res.json(user)
}
//create
const createProduct = (req, res) => {
  products.push({_id: counter++, ...req.body})
  res.json(products[products.length-1])
}
//update
const updateProduct = (req, res) => {
  let user = (products.find(user => user._id === parseInt(req.params.userId)))
  user.name = req.body.name ? req.body.name : user.name
  user.avatar = req.body.avatar ? req.body.avatar : user.avatar
  user.occupation = req.body.occupation ? req.body.occupation : user.occupation
  res.json(user)
}
//delete
const deleteProduct = (req, res) => {
  let user = (products.find(user => user._id === parseInt(req.params.userId)))
  user.isActive = false
  res.status(400).json({message:`No member with the id of ${req.params.userId}`})
}

module.exports = {
  listProducts,
  showProduct,
  createProduct,
  deleteProduct,
  updateProduct
}