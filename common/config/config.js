const config = {
  app: {
    port: parseInt(process.env.PORT, 0) || 3000
  },
  db: {
    mongoURI: process.env.MONGO_URI
  },
  baseUrl: process.env.BASE_API_URL
};

module.exports = config;
