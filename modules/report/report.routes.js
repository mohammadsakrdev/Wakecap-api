const express = require('express');

const requestValidator = require('../../common/middleware/requestValidator');
const { getController } = require('./controllers');
const { getSchema } = require('./joi/validationSchemas');

const router = express.Router();

router.get('/', requestValidator(getSchema), getController);

module.exports = router;
