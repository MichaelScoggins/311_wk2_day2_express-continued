const express = require('express')
const router = express.Router()
const contactsControllers = require('./../controllers/contacts-controllers')

router.get('/contacts', contactsControllers.listContact)
router.get('/contacts/:userId', contactsControllers.showContact)
router.put('/contacts/:userId', contactsControllers.updateContact)
router.delete('/contacts/:userId', contactsControllers.deleteContact)
router.post('/contacts', contactsControllers.createContact)

module.exports = router