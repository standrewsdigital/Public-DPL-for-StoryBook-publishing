const puppeteer = require('puppeteer');
const expect = require('chai').expect;

// This test should fail

describe('HTML and CSS Tests', function () {
  let browser;
  let page;

  before(async function () {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  after(async function () {
    await browser.close();
  });

  it('should load HTML file and check for a specific element', async function () {
    await page.goto('http://localhost:8080/header-and-footer-example.html');
    const title = await page.evaluate(() => document.title);
    expect(title).to.contain('Header and Footer');
  });

  it('should check CSS applied on an element', async function () {
    await page.goto('http://localhost:8080/header-and-footer-example.html');
    const color = await page.evaluate(() => getComputedStyle(document.querySelector('#header')).color);
    expect(color).to.equal('rgb(255, 0, 0)');
  });
});
