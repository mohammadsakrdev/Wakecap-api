const ReportSchema = require('../schema');

/** Class representing a Report model. */
class Report {
  /**
   * @function
   * Finds one Report document
   *
   * @param {Object} conditions - Specifies query conditions.
   * @param {Object} fields - Specifies which document fields to include or exclude.
   *
   * @returns {Promise<Object>} - Promise object represents the returned document.
   */
  static async findOne(conditions, fields = {}) {
    return ReportSchema.findOne(conditions)
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
    return ReportSchema.create(docs);
  }

  /**
   * @function
   * Finds one Report document
   *
   * @param {Object} conditions - Specifies query conditions.
   * @param {Object} fields - Specifies which document fields to include or exclude.
   * @param {Object} options - Options including limit, sort.
   * @param {Number} options.limit - Specifies the maximum number of documents the query will return.
   * @param {Number} options.skip - Specifies the number of documents the query will skip.
   * @param {Object} options.sort - Specifies the sort order.
   *
   * @returns {Promise<Array<Object>>} - Promise object represents the returned documents list.
   */
  static async find(conditions = {}, fields = {}, options = {}) {
    const { limit, sort, skip } = options;
    return ReportSchema.find(conditions)
      .select(fields)
      .limit(limit)
      .skip(skip)
      .sort(sort)
      .lean({ autopopulate: true });
  }

  /**
   * @function
   * Counts number of documents matching criteria in a database collection.
   *
   * @param {Object} conditions - Specifies query conditions.
   *
   * @returns {Promise<Number>} - Promise object represents the number of documents.
   */
  static async countDocuments(conditions = {}) {
    return ReportSchema.countDocuments(conditions);
  }
}

module.exports = Report;
