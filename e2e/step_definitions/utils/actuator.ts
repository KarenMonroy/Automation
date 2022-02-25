import {browser, by, element, ElementFinder, protractor} from 'protractor';
import {Finder} from './finder';

import * as fs from 'fs';

const {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(160000);
let counter = 0;
// ------------------------------------------------------------------------------------------------------------------
// Class
// -------------------------------------------------------------------------------------------------------------------

export class Actuator {

  // Set up URL
  static async navigate(url: string) {
    console.log('Navigate to the URL ' + url);
    await browser.get(url);
  }

  // Wait delay x 1000 seconds
  static async wait(delay: number) {
    await browser.sleep(delay);
  }

// Set values to a web element
  static async setWebElementValue(webElement: ElementFinder, value: string) {
    console.log('Send the value ' + value + ' to the element web ' + webElement);
    await webElement.sendKeys(value);
  }

  // Clear values to a web element
  static async clearWebElement(webElement: ElementFinder) {
    console.log('Clear the values into the web element ' + webElement);
    await webElement.clear();
  }

// Do click to a button web element
  static async clickWebElement(webElement: ElementFinder) {
    console.log('Click to the web element ' + webElement);
    await webElement.click();
  }

  // Move Mouse X Y
  static async moveMouseXY(webElement: ElementFinder, px: number, py: number) {
    console.log('Move Mouse to the web Element: ' + webElement);
    await browser.actions().mouseMove(webElement, {x: px, y: py}).perform();
  }

  // Move Mouse
  static async moveMouse(webElement: ElementFinder) {
    console.log('Move Mouse to the web Element: ' + webElement);
    await browser.actions().mouseMove(webElement).perform();
  }

  // Move Mouse Down
  static async moveMouseDown() {
    console.log('Move Mouse Down');
    await browser.actions().mouseDown().perform();
  }

  // Move Mouse   Up
  static async moveMouseUp() {
    console.log('Move Mouse Up');
    await browser.actions().mouseUp().perform();
  }

  // Go tool-tip
  static async goToolTip() {
    console.log('Go to the tool tip');
    await browser.switchTo().activeElement();
  }

  // Go window
  static async goWindow(window: string) {
    console.log('Go to the window');
    await browser.switchTo().window(window);
  }

  // Go iframe
  static async goIframe(id: string) {
    console.log('Go to the iframe');
    const frame = element(by.xpath('//iframe[@id= "' + id + '"]')).getWebElement();
    await browser.switchTo().frame(frame);
  }

  // Go to principal page
  static async goPrincipalPage() {
    console.log('Go to the principal page');
    await browser.switchTo().defaultContent();
  }

  // Double click
  static async doubleClick() {
    console.log('Double click');
    browser.actions().doubleClick().perform();
  }

  // Double click out
  static async clickOut() {
    console.log('Double click');
    browser.actions().click().perform();
  }

  // Press Enter
  static async executeEnterCommand() {
    console.log('Press ENTER');
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }

  // Press Delete
  static async executeDeleteCommand() {
    console.log('Press DELETE');
    await browser.actions().sendKeys(protractor.Key.BACK_SPACE).perform();
  }

  // Press Subtract
  static async executeSupressCommand() {
    console.log('Press SUPRESS');
    await browser.actions().sendKeys(protractor.Key.DELETE).perform();
  }

  // Press Tab
  static async executeTabCommand() {
    console.log('Press TAB');
    await browser.actions().sendKeys(protractor.Key.TAB).perform();
  }

  // Press Home
  static async executeHomeCommand() {
    console.log('Press HOME');
    await browser.actions().sendKeys(protractor.Key.HOME).perform();
  }

  // Press Esc
  static async executeEscCommand() {
    console.log('Press Esc');
    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
  }

  // Press Alt+F4
  static async executeAltF4Command() {
    console.log('Press Alt+F4');
    browser.actions().sendKeys(protractor.Key.ALT, protractor.Key.F4).perform();
  }

  // Refresh Page
  static async refreshPage() {
    console.log('Refresh Page');
    await browser.refresh();
  }

  // Clean Cache
  static async cleanCache() {
    console.log('Clean Cache');
    await browser.executeScript('window.localStorage.clear();');
    await browser.executeScript('window.sessionStorage.clear();');
    await browser.driver.manage().deleteAllCookies();
  }

  // Restart browser
  static async restartBrowser() {
    console.log('Restart Browser');
    await browser.restart();
  }

  // Click over a text
  static async clickText(text: string) {
    console.log('Click to the text ' + text);
    const webElement: ElementFinder = await Finder.getWebElementByXpath('//*[contains(text(),\'' + text + '\')]');
    await this.clickWebElement(webElement);
  }

  // Count rows of a table
  static async countWebElementsByXpath(xpath: string) {
    console.log('Verify elements of ' + xpath);
    return await element.all(by.xpath(xpath)).count();
    // return await webElement.count();
  }

  // Verify if a file is downloaded
  static async verifyFileInDownloadsFolder(fileName: string, pathDownload: string) {
    const path = require('path').join(__dirname, pathDownload);
    await console.log('Getting users download path ' + path);
    const filePath = path + '/' + fileName;
    await console.log('Getting the path ' + filePath);
    await browser.wait(async () => fs.existsSync(filePath), 10000, 'File never appeared!');
    return fs.existsSync(filePath);
  }

  static waitForAngular(value: boolean) {
    browser.waitForAngularEnabled(value);
  }

  static takeScreenshots(step: string) {
    counter = counter + 1;
    // screenShot is a base-64 encoded PNG
    browser.takeScreenshot().then(png => {
      const stream = fs.createWriteStream('e2e/screenshot/' + counter + step + '.png');
      stream.write(new Buffer(png, 'base64'));
      stream.end();
      this.logBrowser();
    });
  }

  static logBrowser() {
    browser.manage().logs()
      .get('browser').then(browserLog => {
      console.error('log: LOGGED...............' +
        require('util').inspect(browserLog));
    });
  }
}

