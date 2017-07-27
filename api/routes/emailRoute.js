'use strict';
module.exports = function(app) {
  var emailController = require('../controllers/emailController');


  // todoList Routes
  app.route('/email/send')
    .post(emailController.send);
};