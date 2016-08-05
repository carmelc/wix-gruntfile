'use strict';

module.exports = function (grunt, options) {
  if (process.env.IS_BUILD_AGENT) {
    process.env.EYES_API_KEY = 'mE99eP8CUn9UTSXSv98L3OSaJ0NZmAcY6Wndx6WSHODdY110';
    process.env.EYES_BATCH_UUID = process.env.BUILD_NUMBER;
  }

  options = require('./grunt-helpers/grunt-options')(grunt, options);
  require('./grunt-helpers/grunt-overrides')(grunt, options);
  require('./grunt-helpers/grunt-load')(grunt, options);
  require('./grunt-helpers/grunt-init-config')(grunt, options);
  require('./grunt-helpers/grunt-extensions.js')(grunt, options);
  require('./grunt-helpers/grunt-register')(grunt, options);
  require('./grunt-helpers/grunt-migrations.js')(grunt, options);
  require('./grunt-helpers/grunt-friendly-log.js')(grunt, options);
};
