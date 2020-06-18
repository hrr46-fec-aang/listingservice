const puppeteer = require('puppeteer');
const pageURL = 'http://localhost:3002/';

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async ()=> {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width}, ${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({width, height});
});

afterAll(() => {
  browser.close();
});

describe('name of function being tested', () => {

  beforeEach(async () => {
    await page.goto(pageUrl, {waitUntil: 'networkidle2'});
  });

  test('name of unit test', async () => {
    // write test function, look up APIs for puppeteer
    // write assertion, ex: expect().toEqual();
  });

  // add more unit tests as time goes on

});