const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const _ = require('lodash');

const app = require('../app');
const Client = require('../modules/client/model');
const Site = require('../modules/site/model');
const Worker = require('../modules/worker/model');

const should = chai.should();

const timeZones = [
  'America/Los_Angeles',
  'America/Denver',
  'Asia/Shanghai',
  'Asia/Kolkata',
  'Asia/Dubai'
];

chai.use(chaiHttp);

describe('Wakecap-api', () => {
  /*
   * Adding client
   */
  describe('New client', () => {
    it('Posting new client', (done) => {
      const newClient = {
        name: faker.company.companyName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email()
      };
      chai
        .request(app)
        .post('/api/v0/clients')
        .send(newClient)
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });

  /*
   * Adding Site
   */
  describe('Adding new Site', () => {
    it('New site', (done) => {
      Client.find().then((clients) => {
        const newSite = {
          clientId: _.sample(clients)._id,
          name: faker.company.companyName(),
          coordinates: [faker.random.number(), faker.random.number()],
          timezone: _.sample(timeZones),
          startingHour: 8,
          endingHour: 17,
          lateThresholdHour: 1,
          totalInactiveHours: 1
        };
        chai
          .request(app)
          .post('/api/v0/sites')
          .send(newSite)
          .end((err, res) => {
            res.should.have.status(201);
            done();
          });
      });
    });
  });

  /*
   * Adding Worker
   */
  describe('Adding new Worker', () => {
    it('New Worker', (done) => {
      Site.find().then((sites) => {
        const { _id: siteId, clientId } = _.sample(sites);
        const newWorker = {
          name: faker.name.firstName(),
          clientId,
          siteId
        };
        chai
          .request(app)
          .post('/api/v0/workers')
          .send(newWorker)
          .end((err, res) => {
            res.should.have.status(201);
            done();
          });
      });
    });
  });

  /*
   * Adding Asset log
   */
  describe('Adding new asset log', () => {
    it('New Asset', (done) => {
      Worker.find().then((workers) => {
        const { _id: worker_id } = _.sample(workers);
        const is_active = _.sample([true, false]);
        const newAsset = {
          coordinates: {
            coordinates: [faker.random.number(), faker.random.number()],
            type: 'Point'
          },
          is_active,
          duration: faker.random.number({
            min: 50,
            max: 120
          }),
          worker_id
        };
        chai
          .request(app)
          .post('/api/v0/assets')
          .send(newAsset)
          .end((err, res) => {
            res.should.have.status(201);
            done();
          });
      });
    });
  });
});
