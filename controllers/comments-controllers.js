const comments = require("../data/comments")

let counter = comments.length + 1

// list
const listComments = (req, res) =>
  res.json(comments.filter((i) => i.isActive !== false))
// show
const showComment = (req, res) => {
  const user = comments.find((i) => i._id == req.params.userId)
  console.log(user)
  if (user.isActive === false) {
    res
      .status(400)
      .json({ message: `No comment with the id of ${req.params.userId}` })
  } else {
    res.json(user)
  }
}
// create
const createComment = (req, res) => {
  comments.push({ _id: counter++, ...req.body })
  res.json(comments[comments.length - 1])
}
// update
const updateComment = (req, res) => {
  const user = comments.find((i) => i._id === parseInt(req.params.userId))
  if (user.isActive === false) {
    res
      .status(400)
      .json({ message: `No comment with the id of ${req.params.userId}` })
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
const deleteComment = (req, res) => {
  const user = comments.find((i) => i._id === parseInt(req.params.userId))
  user.isActive = false
  res
    .status(400)
    .json({ message: `No comment with the id of ${req.params.userId}` })
}

module.exports = {
  listComments,
  showComment,
  createComment,
  deleteComment,
  updateComment,
}
