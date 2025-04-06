const express = require('express');
const router = express.Router();

const { getAllContacts, getContact, createContact, updateContact, deleteContact } = require('../controllers/contactController')

router.route('/').get(getAllContacts);
router.route('/').post(createContact);
// this can be modified like below, as both routes are same

router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);
// if the routes are same and functions are differenent, we can chain like this

module.exports = router;