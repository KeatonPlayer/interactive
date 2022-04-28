var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '0ebda9e86b104b189239a5f6d2ebca72',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

try {
    nonExistentFunction();
  } catch (error) {
    rollbar.error('function does not exist')
  }
  