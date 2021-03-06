const vehicles = require("../data/vehicles")

let counter = vehicles.length + 1

// list
const listVehicles = (req, res) =>
  res.json(vehicles.filter((i) => i.isActive !== false))
// show
const showVehicle = (req, res) => {
  const user = vehicles.find((i) => i._id == req.params.userId)
  console.log(user)
  if (user.isActive === false) {
    res
      .status(400)
      .json({ message: `No vehicle with the id of ${req.params.userId}` })
  } else {
    res.json(user)
  }
}
// create
const createVehicle = (req, res) => {
  vehicles.push({ _id: counter++, ...req.body })
  res.json(vehicles[vehicles.length - 1])
}
// update
const updateVehicle = (req, res) => {
  const user = vehicles.find((i) => i._id === parseInt(req.params.userId))
  if (user.isActive === false) {
    res
      .status(400)
      .json({ message: `No vehicle with the id of ${req.params.userId}` })
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
const deleteVehicle = (req, res) => {
  const user = vehicles.find((i) => i._id === parseInt(req.params.userId))
  user.isActive = false
  res
    .status(400)
    .json({ message: `No vehicle with the id of ${req.params.userId}` })
}

module.exports = {
  listVehicles,
  showVehicle,
  createVehicle,
  deleteVehicle,
  updateVehicle,
}
