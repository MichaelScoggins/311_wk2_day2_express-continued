const contacts = require("../data/contacts")

let counter = contacts.length + 1

// list
const listContacts = (req, res) =>
  res.json(contacts.filter((i) => i.isActive !== false))
// show
const showContact = (req, res) => {
  const user = contacts.find((i) => i._id == req.params.userId)
  console.log(user)
  if (user.isActive === false) {
    res
      .status(400)
      .json({ message: `No contact with the id of ${req.params.userId}` })
  } else {
    res.json(user)
  }
}
// create
const createContact = (req, res) => {
  contacts.push({ _id: counter++, ...req.body })
  res.json(contacts[contacts.length - 1])
}
// update
const updateContact = (req, res) => {
  const user = contacts.find((i) => i._id === parseInt(req.params.userId))
  if (user.isActive === false) {
    res
      .status(400)
      .json({ message: `No contact with the id of ${req.params.userId}` })
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
const deleteContact = (req, res) => {
  const user = contacts.find((i) => i._id === parseInt(req.params.userId))
  user.isActive = false
  res
    .status(400)
    .json({ message: `No contact with the id of ${req.params.userId}` })
}

module.exports = {
  listContacts,
  showContact,
  createContact,
  deleteContact,
  updateContact,
}
