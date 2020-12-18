const express = require("express")
const bodyParser = require("body-parser")

const app = express()

const contacts = require("./routes/contacts-routes")
const comments = require("./routes/comments-routes")
const products = require("./routes/products-routes")
const vehicles = require("./routes/vehicles-routes")

const port = process.env.PORT || 4001

app.use(bodyParser.json())

app.use(contacts)
app.use(comments)
app.use(products)
app.use(vehicles)

app.use(express.static("public"))

app.listen(port, () => {
  console.log(`My app is listening on port ${port} @ ${new Date()}!`)
})
