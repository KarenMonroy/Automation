import {ElementFinder} from 'protractor';
const {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(160000);
// ------------------------------------------------------------------------------------------------------------------
// Class
// -------------------------------------------------------------------------------------------------------------------
export class Validator {
  // Get element by id
  static async webElementExists(webElement: ElementFinder) {
    console.log('The element web ' + webElement + ' exists?');
    return await webElement.isPresent();
  }
}
