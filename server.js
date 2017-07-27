var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Task = require('./api/models/testListModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Testdb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var listRoutes = require('./api/routes/testListRoute');
var emailRoutes = require('./api/routes/emailRoute');
listRoutes(app);
emailRoutes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);