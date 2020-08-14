let vehicles = require('./../data/vehicles')
let counter = vehicles.length + 1

//list
const listVehicles = (req, res) => res.json(vehicles)
//show
const showVehicle = (req, res) => {
  const user = vehicles.find(i => i_id == req.params.userId)
  console.log(user)
  res.json(user)
}
//create
const createVehicle = (req, res) => {
  vehicles.push({_id: counter++, ...req.body})
  res.json(vehicles[vehicles.length-1])
}
//update
const updateVehicle = (req, res) => {
  let user = (vehicles.find(user => user._id === parseInt(req.params.userId)))
  user.name = req.body.name ? req.body.name : user.name
  user.avatar = req.body.avatar ? req.body.avatar : user.avatar
  user.occupation = req.body.occupation ? req.body.occupation : user.occupation
  res.json(user)
}
//delete
const deleteVehicle = (req, res) => {
  let user = (vehicles.find(user => user._id === parseInt(req.params.userId)))
  user.isActive = false
  res.status(400).json({message:`No member with the id of ${req.params.userId}`})
}

module.exports = {
  listVehicles,
  showVehicle,
  createVehicle,
  deleteVehicle,
  updateVehicle
}