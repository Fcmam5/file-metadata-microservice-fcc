var express = require('express'),
    routes = require('./app/routes/index.js');
var app = express()
var multer = require('multer');

app.use(multer);
routes(app);


app.listen(3000, function () {
  console.log('I am listening on port 3000!')
});
