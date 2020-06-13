const initRoutes = require('./init-routes');
const connectDB = require('./init-db');
const notificationsSubscriber = require('../../modules/pubSub/notifications-subscriber');
const { createQueue } = require('../utils/notificationQue');
const notificationWorker = require('../utils/notificationWorker').start;

/**
 * @function
 * Initializes app components
 *
 * @param {object} app - Express app.
 */
module.exports = (app) => {
  initRoutes(app);
  connectDB();
  notificationsSubscriber();
  createQueue();
  notificationWorker();
};
