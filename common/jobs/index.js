const { CronJob } = require('cron');

const ReportService = require('../../modules/report/services');

// There is another way to apply the same logic using the agenda library (https://www.npmjs.com/package/agenda)
// by setting the time to run each job in the db for each site instead of querying for each site that match
// the current equivalent time to its midnight

// Cron job every 1 hour
const reportJob = new CronJob('0 * * * *', async () => {
  try {
    await ReportService.generateReports();
  } catch (err) {
    // will be handled
  }
});

module.exports = reportJob;
