const { CREATED, BAD_REQUEST } = require('http-status-codes');

const asyncHandler = require('../../../common/middleware/async');
const Worker = require('../model');

// @desc      Add Worker
// @route     POST /api/v0/workers
// @access    Public
module.exports = asyncHandler(async (req, res, next) => {
  const { name, clientId, siteId } = req.body;

  await Worker.create({ name, clientId, siteId });

  return res.status(CREATED).json({
    success: true,
    message: 'Worker created successfully',
    data: null
  });
});
