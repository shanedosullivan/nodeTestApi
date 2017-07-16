'use strict';

var dao = require('../daos/testListDao');

exports.list = function() {
  console.log("List service method called");
  return dao.list();
};

exports.save = function(user) {
	return dao.create(user);
}