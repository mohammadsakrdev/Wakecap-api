const WorkerSchema = require('../schema');

/** Class representing a Worker model. */
class Worker {
  /**
   * @function
   * Finds one Worker document
   *
   * @param {Object} conditions - Specifies query conditions.
   * @param {Object} fields - Specifies which document fields to include or exclude.
   *
   * @returns {Promise<Object>} - Promise object represents the returned document.
   */
  static async findOne(conditions, fields = {}) {
    return WorkerSchema.findOne(conditions)
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
    return WorkerSchema.create(docs);
  }

  /**
   * @function
   * Finds one Worker document
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
    return WorkerSchema.find(conditions)
      .select(fields)
      .limit(limit)
      .sort(sort)
      .lean();
  }
}

module.exports = Worker;
