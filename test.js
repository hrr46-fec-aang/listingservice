const puppeteer = require('puppeteer');
const pageURL = 'http://localhost:3002';

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

afterAll(() => {
  browser.close();
});

describe('test passing GET request', () => {

  // beforeEach(async () => {
  //   await page.goto('http://localhost:3002/82', {waitUntil: 'networkidle2'});
  // });

  test('Checks that GET returns correct site based on id', async () => {
    const res = await page.goto('http://localhost:3002/82');
    const resBody = await res.text();
    const resBodyObj = JSON.parse(resBody);
    expect(resBodyObj.id).toEqual(82);

  });


});


// describe('feature testing', () => {
//   beforeEach(async () => {
//     await page.goto(pageUrl, {waitUntil: 'networkidle2'});
//   });
//   test('unit test', async () => {
//        expect().toEqual()
//
//   });
//   // add more unit tests as time goes on
// });