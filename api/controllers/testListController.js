'use strict';

var mongoose = require('mongoose'),
  UserMongoose = mongoose.model('Users');

var userService = require('../services/testListService');

var flag = true;

exports.list = function(req, res) {
	UserMongoose.find({}, function(err, data) {
      if (err) {
        res.send(err);
      }
      res.json(data);
    });
};

exports.get = function(req, res) {
	UserMongoose.findById(req.params.userId, function(err, user) {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
};

exports.save = function(req, res) {
	var userMongoose = new UserMongoose(req.body);
	  userMongoose.save(function(err, savedUser) {
	    if (err)
	      res.send(err);
	    
	    res.json(savedUser);
	  });
};

exports.update = function(req, res) {
  UserMongoose.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, updatedUser) {
    if (err)
      res.send(err);
    res.json(updatedUser);
  });
};


exports.delete = function(req, res) {
  UserMongoose.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User with id ' +req.params.userId+ ' successfully deleted' });
  });
};

var testPromise = new Promise(function (resolve, reject){

		if(flag){
			userService.promise();
			var lyric = {
            	    next: 'Tell Em What You Heard',
               		afterThat: 'You Know Its Gonna Be Ok!'
            	};
         	resolve(lyric);
         }else{
         	reject(new Error("Error in the promise!"));
         }
	});

exports.promise = function(req, res) {

	testPromise.then(function (resolve) {
            console.log(resolve);
        })
        .catch(function (error) {
            console.log(error.message);
        });
	console.log("All Around The World");
};

