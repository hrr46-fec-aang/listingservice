const app = require('./server/index.js');
const supertest = require('supertest');
const request = supertest(app);
const mongoose = require('mongoose');
mongoose.promise = global.Promise;
const Sites = require('./database/Site.js');

describe('tests server', () => {
  beforeAll(async () => {
    const url = `mongodb://127.0.0.1/test`;

    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  beforeEach(async () => {

  });

  afterEach(async () => {
    //await Camp.deleteMany();
  });

  afterAll(async () => {

  });

  it('should find the campsite by url id', async (done) => {
    const res = await request.get('/site/82');
    expect(res.body.id).toBe(82);
    done();
  });

});

module.exports = {
  supertest: supertest
}