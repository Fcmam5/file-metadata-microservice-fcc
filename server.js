var express = require('express'),
    routes = require('./app/routes/index.js');
var app = express()

routes(app);


app.listen(3000, function () {
  console.log('I am listening on port 3000!')
});
