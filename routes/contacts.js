const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createContactValidationRules,
  validate,
} = require('../validators/contact');

const {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} = require('../controllers/contacts');

router.use(auth);
router
  .route('/')
  .get(getContacts)
  .post(createContactValidationRules(), validate, createContact);
router.route('/:id').put(updateContact).delete(deleteContact);

module.exports = router;
