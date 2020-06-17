const express = require('express');

const requestValidator = require('../../common/middleware/requestValidator');
const { addController } = require('./controllers');
const { addSchema } = require('./joi/validationSchemas');

const router = express.Router();

router.post('/', requestValidator(addSchema), addController);

module.exports = router;
