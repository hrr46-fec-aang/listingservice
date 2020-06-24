// const app = require('./server/index.js');
// const mongoose = require('mongoose');
// const Site = require('./database/Site.js');
// const db = require('./database/index.js');

// describe('test passing GET request', () => {
  // afterAll(async () => {
  //   await db.close();
  // });

  // it('Checks that GET returns correct site based on id', async () => {
  //   const res = app.get('/site/82');
  //   const resBodyObj = JSON.parse(res.body);
  //   expect(resBodyObj.id).toEqual(82);

  // });



//   test('Checks that GET returns Not Found based on false id', async () => {
//     const res = await page.goto('http://localhost:3002/site/182');
//     const resBody = await res.text();
//     expect(resBody).toEqual('Not found');

//   });


// });

const app = require('./server/index.js');
const supertest = require('supertest');
const request = supertest(app);
const mongoose = require('mongoose');
const databaseName = 'test';
// const puppeteer = require('puppeteer');
// const pageURL = 'http://localhost:3002/';

// let page;
// let browser;
// const width = 1280;
// const height = 720;

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${databaseName}`;
  await mongoose.connect(url, { useNewUrlParser: true });
});

app.get('http://localhost:3002/site/82', async (req, res) => {
  res.json({ message: "pass!" });
});

it("Gets the test endpoint", async done => {
  // Sends GET Request to /test endpoint
  const response = await request.get('http://localhost:3002/site/82');

  expect(response.id).toBe(82);
  done();

});

// Cleans up database between each test
// afterEach(async () => {
//   await Site.deleteMany();
// });

// beforeAll(async () => {
//   browser = await puppeteer.launch({
//     headless: false,
//     slowMo: 100,
//     args: [`--window-size=${width}, ${height}, -–no-sandbox, --disable-setuid-sandbox`]
//   });
//   page = await browser.newPage();
//   await page.setViewport({width, height});
// });

// afterAll(() => {
//   browser.close();
// });

// describe('test passing GET request', () => {

//   // beforeEach(async () => {
//   //   await page.goto('http://localhost:3002/82', {waitUntil: 'networkidle2'});
//   // });

//   test('Checks that GET returns correct site based on id', async () => {
//     const res = await page.goto('http://localhost:3002/site/82');
//     const resBody = await res.text();
//     const resBodyObj = JSON.parse(resBody);
//     expect(resBodyObj.id).toEqual(82);

//   });
// });


// describe('feature testing', () => {
//   beforeEach(async () => {
//     await page.goto(pageUrl, {waitUntil: 'networkidle2'});
//   });
//   test('unit test', async () => {
//        expect().toEqual()

//   });

// });