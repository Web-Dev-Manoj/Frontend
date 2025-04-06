// @desc Get All Contacts
// @api GET /api/contacts
// @access public

const getAllContacts = (req, res) => {
    res.status(200).json({ message: 'Get All Contacts!' });
}

// @desc Get Contact
// @api GET /api/contacts/:id
// @access public

const getContact = (req, res) => {
    res.status(200).json({ message: `Requested contact ${req.params.id} information` });
}

// @desc Create Contact
// @api POST /api/contacts/
// @access public

const createContact = (req, res) => {
    console.log(req.body);
    res.status(201).json({ message: 'Create New Contact!' });
}

// @desc Update Contact
// @api PUT /api/contacts/:id
// @access public

const updateContact = (req, res) => {
    res.status(200).json({ message: 'Update Contact' });
}

// @desc Delete Contact
// @api DELETE /api/contacts/:id
// @access public

const deleteContact = (req, res) => {
    res.status(200).json({ message: 'Delete Contact' });
}

module.exports = { getAllContacts, getContact, createContact, updateContact, deleteContact };