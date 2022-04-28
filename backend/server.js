const express = require ('express')
const path = require('path')
const app = express()
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '0ebda9e86b104b189239a5f6d2ebca72',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')
app.use(express.static(path.join(__dirname, '../frontend')))




try {
    nonExistentFunction();
  } catch (error) {
    rollbar.error('function does not exist')
  }
  





const port  = process.env.PORT || 4005
app.listen(port, function(){
console.log(`Listening on da port that is ${port}`)
})

