const products = require("../data/products")

let counter = products.length + 1

// list
const listProducts = (req, res) =>
  res.json(products.filter((i) => i.isActive !== false))
// show
const showProduct = (req, res) => {
  const user = products.find((i) => i._id == req.params.userId)
  console.log(user)
  if (user.isActive === false) {
    res
      .status(400)
      .json({ message: `No product with the id of ${req.params.userId}` })
  } else {
    res.json(user)
  }
}
// create
const createProduct = (req, res) => {
  products.push({ _id: counter++, ...req.body })
  res.json(products[products.length - 1])
}
// update
const updateProduct = (req, res) => {
  const user = products.find((i) => i._id === parseInt(req.params.userId))
  if (user.isActive === false) {
    res
      .status(400)
      .json({ message: `No product with the id of ${req.params.userId}` })
  } else {
    user.name = req.body.name ? req.body.name : user.name
    user.avatar = req.body.avatar ? req.body.avatar : user.avatar
    user.occupation = req.body.occupation
      ? req.body.occupation
      : user.occupation
    res.json(user)
  }
}
// delete
const deleteProduct = (req, res) => {
  const user = products.find((i) => i._id === parseInt(req.params.userId))
  user.isActive = false
  res
    .status(400)
    .json({ message: `No product with the id of ${req.params.userId}` })
}

module.exports = {
  listProducts,
  showProduct,
  createProduct,
  deleteProduct,
  updateProduct,
}
