# Automation
## Install Dependencies

Run `npm install` to install the dependencies [Protractor](http://www.protractortest.org/).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Structure
* package.json: File with the dependencies
* e2e: Directory of the test:
  * feature: Directory for the feature.
  * step_definitions: Directory with the development of each feature.
    * constants: Directory with the constants for the ids, labels, variables and other for the execution of the steps.
    * utils: Directory with the framework for the execution of each step.
      * Finder: Framework with the methods to find the web elements.
      * Actuator: Framework with the methods to execute actions over the web elements.
      * Validator: Framework with the method to validate the web elements.
  * protractor.conf.js: Configuration of the tests, features, steps, browser, framework, cucumber.
  * protractor.specs.js: Sequence of execution of the features.
  
  
  The feature and step definition have directories associated:
  * WordCounter

