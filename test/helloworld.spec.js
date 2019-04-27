const { describe, it } = require('mocha'); //ref on mocha lib
const logger = require('../utils/log.util') //ref on class log

describe('Hello World TestSuite', () => { //suit for test - describe
    it('should write "Hello World"', () => {
        logger.info('Hello World');
    });
});