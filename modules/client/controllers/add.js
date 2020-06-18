const { CREATED } = require('http-status-codes');

const asyncHandler = require('../../../common/middleware/async');
const Client = require('../model');

// @desc      Add Client
// @route     POST /api/v0/clients
// @access    Public
module.exports = asyncHandler(async (req, res) => {
  const { name, phoneNumber, email } = req.body;

  await Client.create({
    name,
    phoneNumber,
    email
  });

  return res.status(CREATED).json({
    success: true,
    message: 'Client created successfully',
    data: null
  });
});
