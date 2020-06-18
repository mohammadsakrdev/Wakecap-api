const AssetSchema = require('../schema');

/** Class representing a Asset model. */
class Asset {
  /**
   * @function
   * Finds one Asset document
   *
   * @param {Object} conditions - Specifies query conditions.
   * @param {Object} fields - Specifies which document fields to include or exclude.
   *
   * @returns {Promise<Object>} - Promise object represents the returned document.
   */
  static async findOne(conditions, fields = {}) {
    return AssetSchema.findOne(conditions)
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
    return AssetSchema.create(docs);
  }

  /**
   * @function
   * Finds one Asset document
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
    return AssetSchema.find(conditions)
      .select(fields)
      .limit(limit)
      .sort(sort)
      .lean();
  }

  /**
   * @function
   * Finds one Asset document
   *@param {String} field - Specifies which field.
   * @param {Object} conditions - Specifies query conditions.
   *
   * @returns {Promise<Array<Object>>} - Promise object represents the returned documents list.
   */
  static async distinct(field, conditions = {}) {
    return AssetSchema.distinct(field, conditions).lean();
  }

  /**
   * @function
   * Performs aggregations on the models collection.
   *@param {String} aggregations - pipeline operator(s) or operator array.
   *
   * @returns {Promise<Array<Object>>} - Promise object represents the aggregations result.
   */
  static async aggregate(aggregations) {
    return AssetSchema.aggregate(aggregations);
  }
}

module.exports = Asset;
