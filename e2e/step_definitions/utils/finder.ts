import {browser, by, element, ElementFinder} from 'protractor';
const {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(160000);
// ------------------------------------------------------------------------------------------------------------------
// Class
// -------------------------------------------------------------------------------------------------------------------

export class Finder {
  // Get element by id
  static async getWebElementById(webElementId: string) {
    console.log('Get the element web ' + webElementId + ' by ID');
    return await element(by.id(webElementId));
  }

  // Get element by xpath
  static async getWebElementByXpath(xpath: string) {
    console.log('Get the element web with the xpath: ' + xpath);
    return await element(by.xpath(xpath));
  }

  // Get element by css
  static async getWebElementByCss(css: string) {
    console.log('Get the element web with the css: ' + css);
    return await element(by.css(css));
  }

// Get the current URL of the Browser
  static async getBrowserUrl() {
    console.log('Get the current URL');
    return browser.getCurrentUrl();
  }

// Get the text content of a web element
  static async getWebElementText(webElement: ElementFinder ) {
    console.log('Get text for the element web ' + webElement);
    return await webElement.getText();
  }

  // Get the text in all content
  static async getTextInAllContent(text: string) {
    console.log('Get the text ' + text);
    return await element(by.cssContainingText('*', text));
  }

  // Get the link by text
  static async getLinkByText(text: string) {
    console.log('Get the link by text ' + text);
    return await element(by.linkText(text));
  }

  // Get the button by text
  static async getButtonByText(text: string) {
    console.log('Get the button by text ' + text);
    return await element(by.buttonText(text));
  }

  // Get Title
  static async getBrowserTitle() {
    console.log('Get the title of the page');
    return await browser.getTitle();
  }

// Get Attributes of a web element
  static async getWebElementAttribute(webElement: ElementFinder , attribute: string) {
    console.log('Get the attribute ' + attribute + ' for the element web ' + webElement);
    return await webElement.getAttribute(attribute);
  }

  // Get All components by Xpath
  static async getManyElementsByXpath(xpath: string) {
    return await element.all(by.xpath(xpath));
  }

  // Get All components by CSS
  static async getManyElementsByCss(css: string) {
    return await element.all(by.xpath(css));
  }
}

