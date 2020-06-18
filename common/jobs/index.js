const { CronJob } = require('cron');

const ReportService = require('../../modules/report/services');

// Cron job every 1 hour
const reportJob = new CronJob('0 * * * *', async () => {
  try {
    await ReportService.generateReports();
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = reportJob;
