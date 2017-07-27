'use strict';

var dao = require('../daos/testListDao');

exports.list = function() {
  return dao.list();
};

exports.save = function(user) {
	return dao.create(user);
}

exports.promise = function(){
	console.log("Second");
}