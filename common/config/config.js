const config = {
  app: {
    port: parseInt(process.env.PORT, 0) || 3000
  },
  db: {
    mongoURI: process.env.MONGO_URI
  },
  jwt: {
    key: process.env.JWT_SECRET,
    expire: process.env.JWT_EXPIRE
  },
  baseUrl: process.env.BASE_API_URL,
  salt: process.env.BCRYPT_SALT_ROUNDS,
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    rqmsNamespace: process.env.RQMS_NAME_SPACE,
    notificationQueue: process.env.REDIS_NOTIFICATION_QUEUE
  },
  events: {
    notifications: process.env.NOTIFICATION_EVENT
  }
};

module.exports = config;
