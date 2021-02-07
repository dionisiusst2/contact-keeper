const User = require('../models/User');
const Contact = require('../models/Contact');

// @route     GET api/contacts
// @desc      Get all users contacts
// @access    Private
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });

    res.status(200).json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route     POST api/contacts
// @desc      Add new contact
// @access    Private
exports.createContact = async (req, res) => {
  const { name, email, phone, type } = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      type,
      user: req.user.id,
    });

    const contact = await newContact.save();

    res.status(200).json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// @route     PUT api/contacts/:id
// @desc      Add new contact
// @access    Private
exports.updateContact = async (req, res) => {
  const { name, email, phone, type } = req.body;

  const contactFields = {};

  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (type) contactFields.type = type;

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        msg: 'Contact not found',
      });
    }

    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({
        msg: 'Not authorized',
      });
    }

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        $set: contactFields,
      },
      { new: true }
    );

    res.json(contact);
  } catch (error) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// @route     DELETE api/contacts/:id
// @desc      Delete contact
// @access    Private
exports.deleteContact = async (req, res) => {
  const { name, email, phone, type } = req.body;

  const contactFields = {};

  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (type) contactFields.type = type;

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        msg: 'Contact not found',
      });
    }

    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({
        msg: 'Not authorized',
      });
    }

    await Contact.findByIdAndRemove(req.params.id);

    res.json({
      msg: 'Contact Removed',
    });
  } catch (error) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
