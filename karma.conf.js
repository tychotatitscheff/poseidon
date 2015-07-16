/* eslint no-var: 0, babel/object-shorthand: 0, vars-on-top: 0 */
require('babel/register');

var webpackConfig = require('./webpack/test.config.js');
var isCI = process.env.CONTINUOUS_INTEGRATION === 'true';
var runCoverage = process.env.COVERAGE === 'true' || isCI;
var devBrowser = process.env.PHANTOM ? 'PhantomJS' : 'Chrome';

var preprocessors = ['webpack', 'sourcemap'];
var reporters;
if (isCI) {
  reporters = ['junit'];
} else {
  reporters = ['mocha'];
}

if (runCoverage) {
  webpackConfig = require('./webpack/test-coverage.config');
  reporters.push('coverage');

  if (isCI) {
    reporters.push('coveralls');
  }
}

module.exports = function genConfig(config) {
  config.set({

    basePath: '',

    frameworks: [
      'mocha',
      'sinon-chai'
    ],

    files: [
      'test/*.spec.js'
    ],

    preprocessors: {
      'test/*.spec.js': preprocessors
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true // isCI
    },

    reporters: reporters,

    coverageReporter: {
      dir: '.coverage',
      reporters: [
        { type: 'lcovonly' }
      ]
    },

    junitReporter: {
      outputDir: 'coverage', // results will be saved as $outputDir/$browserName.xml
      suite: ''
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: [ isCI ? 'ChromeTravisCI' : devBrowser ],

    customLaunchers: {
      ChromeTravisCI: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    captureTimeout: 60000,
    browserNoActivityTimeout: 45000,

    singleRun: isCI
  });
};
