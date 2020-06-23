const puppeteer = require('puppeteer');
const pageURL = 'http://localhost:3002/';

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    args: [`--window-size=${width}, ${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({width, height});
});

// afterAll(() => {
//   browser.close();
// });

describe('test passing GET request', () => {

  test('Checks that GET returns correct site based on id', async () => {
    const res = await page.goto('http://localhost:3002/site/82');
    const resBody = await res.text();
    const resBodyObj = JSON.parse(resBody);
    expect(resBodyObj.id).toEqual(82);

  });

  test('Checks that GET returns Not Found based on false id', async () => {
    const res = await page.goto('http://localhost:3002/site/182');
    const resBody = await res.text();
    expect(resBody).toEqual('Not found');

  });


});


// describe('feature testing', () => {
//   beforeEach(async () => {
//     await page.goto(pageUrl, {waitUntil: 'networkidle2'});
//   });
//   test('unit test', async () => {
//        expect().toEqual()

//   });

// });