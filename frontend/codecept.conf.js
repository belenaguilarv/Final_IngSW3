const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://finalingsw3-frontend-le6nxzn4zq-uc.a.run.app/',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'frontend'
}