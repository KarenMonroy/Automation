import {Given, Then, When} from 'cucumber';
import {Actuator} from '../utils/actuator';
import {Finder} from '../utils/finder';
import * as constants from '../constants';

// -------------------------------------------------------------------------------------------------------------------
// Scenario: The navigate in Word Counter
// -------------------------------------------------------------------------------------------------------------------

Given(/^a user navigates in Word Counter$/, async () => {
  console.log('the user navigates in Word Counter');
  await Actuator.waitForAngular(false);
  await Actuator.navigate('https://wordcounter.net/');
});

When(/^a user write (.*) in the text field$/, async (words: string) => {
  console.log('a user write ' + words + ' in the text field');
  const webElementSelected = await Finder.getWebElementById(constants.WORDCOUNTER.TEXT_FILE);
  await Actuator.clickWebElement(webElementSelected);
  await Actuator.setWebElementValue(webElementSelected, words);
});

Then(/^a user see text (.*)$/, async (total: string, ) => {
  console.log('a user see text ' + total);
  let xpath = constants.WORDCOUNTER.TOTAL_TEXT;
  xpath = xpath.replace('TOTAL', total);
  const webElement = await Finder.getWebElementByXpath(xpath);
  await Finder.getTextInAllContent(webElement);
});

// -------------------------------------------------------------------------------------------------------------------
// Scenario: The navigate in Word Counter
// -------------------------------------------------------------------------------------------------------------------

Given(/^a user click in Keyword Density$/, async () => {
  console.log('a user click in Keyword Density');
  const id = constants.WORDCOUNTER.KEYWORD_DENSITY_ID;
  await Finder.getWebElementById(id);
});

When(/^a user validate total repeat word is (.*)$/, async (repeat: string) => {
  console.log('a user validate total repeat word is ' + repeat);
  const id = constants.WORDCOUNTER.KEYWORD_DATA_ID;
  await Finder.getWebElementById(id);
  await Finder.getTextInAllContent(repeat);
});

Then(/^the total de repeat word (.*)$/, async (total: string, ) => {
  console.log('a user see text ' + total);
  let xpath = constants.WORDCOUNTER.REPEAT_WORD_TOTAL;
  xpath = xpath.replace('TOTAL', total);
  const webElement = await Finder.getWebElementByXpath(xpath);
  await Finder.getTextInAllContent(webElement);
});









