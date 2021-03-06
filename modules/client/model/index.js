const ClientSchema = require('../schema');

/** Class representing a Client model. */
class Client {
  /**
   * @function
   * Finds one Client document
   *
   * @param {Object} conditions - Specifies query conditions.
   * @param {Object} fields - Specifies which document fields to include or exclude.
   *
   * @returns {Promise<Object>} - Promise object represents the returned document.
   */
  static async findOne(conditions, fields = {}) {
    return ClientSchema.findOne(conditions)
      .select(fields)
      .lean();
  }

  /**
   * @function
   * Saving one or more documents to the database.
   *
   * @param {Array|Object} docs - Documents to insert, as a spread or array.
   *
   * @returns {Promise<Object>} - Promise object represents the created document.
   */
  static async create(docs) {
    return ClientSchema.create(docs);
  }

  /**
   * @function
   * Finds one Client document
   *
   * @param {Object} conditions - Specifies query conditions.
   * @param {Object} fields - Specifies which document fields to include or exclude.
   * @param {Object} options - Options including limit, sort.
   * @param {Number} options.limit - Specifies the maximum number of documents the query will return.
   * @param {Object} options.sort - Specifies the sort order.
   *
   * @returns {Promise<Array<Object>>} - Promise object represents the returned documents list.
   */
  static async find(conditions = {}, fields = {}, options = {}) {
    const { limit, sort } = options;
    return ClientSchema.find(conditions)
      .select(fields)
      .limit(limit)
      .sort(sort)
      .lean();
  }
}

module.exports = Client;
