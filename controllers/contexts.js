// @route     GET api/contacts
// @desc      Get all users contacts
// @access    Private
exports.getContacts = (req, res) => {
  res.send('Get all contacts');
};

// @route     POST api/contacts
// @desc      Add new contact
// @access    Private
exports.createContact = (req, res) => {
  res.send('Add contacts');
};

// @route     PUT api/contacts/:id
// @desc      Add new contact
// @access    Private
exports.updateContact = (req, res) => {
  res.send('Update contacts');
};

// @route     DELETE api/contacts/:id
// @desc      Delete contact
// @access    Private
exports.deleteContact = (req, res) => {
  res.send('Delete contacts');
};
