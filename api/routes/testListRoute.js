'use strict';
module.exports = function(app) {
  var testListController = require('../controllers/testListController');


  // todoList Routes
  app.route('/user')
    .get(testListController.list)
    .post(testListController.save);


  app.route('/user/:userId')
   .get(testListController.get)
   .put(testListController.update)
   .delete(testListController.delete);
};
