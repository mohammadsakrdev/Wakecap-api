const { CREATED, BAD_REQUEST } = require('http-status-codes');

const asyncHandler = require('../../../common/middleware/async');
const Site = require('../model');

// @desc      Add site
// @route     POST /api/v0/sites
// @access    Public
module.exports = asyncHandler(async (req, res, next) => {
  const {
    clientId,
    name,
    coordinates,
    timezone,
    startingHour,
    endingHour,
    lateThresholdHour,
    totalInactiveHours
  } = req.body;

  await Site.create({
    clientId,
    name,
    location: { coordinates, type: 'Point' },
    timezone,
    startingHour,
    endingHour,
    lateThresholdHour,
    totalInactiveHours
  });

  return res.status(CREATED).json({
    success: true,
    message: 'Vendor created successfully',
    data: null
  });
});
