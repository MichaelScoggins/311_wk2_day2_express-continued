let contacts = require('./../data/contacts')
let counter = contacts.length + 1

//list
const listContact = (req, res) => res.json(contacts)
//show
const showContact = (req, res) => {
  const user = contacts.find(i => i_id == req.params.userId)
  console.log(user)
  res.json(user)
}
//create
const createContact = (req, res) => {
  contacts.push({_id: counter++, ...req.body})
  res.json(contacts[contacts.length-1])
}
//update
const updateContact = (req, res) => {
  let user = (contacts.find(user => user._id === parseInt(req.params.userId)))
  user.name = req.body.name ? req.body.name : user.name
  user.avatar = req.body.avatar ? req.body.avatar : user.avatar
  user.occupation = req.body.occupation ? req.body.occupation : user.occupation
  res.json(user)
}
//delete
const deleteContact = (req, res) => {
  let user = (contacts.find(user => user._id === parseInt(req.params.userId)))
  user.isActive = false
  res.status(400).json({message:`No member with the id of ${req.params.userId}`})
}

module.exports = {
  listContact,
  showContact,
  createContact,
  deleteContact,
  updateContact
}