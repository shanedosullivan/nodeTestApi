'use strict';

var mongoose = require('mongoose'),
  UserMongoose = mongoose.model('Users');

exports.list = function() {
  var users  = null;
  UserMongoose.find({}, function(err, data) {
      if (err) {
        throw err;
      }
      users = data;
    });
  return users;
};


exports.create = function(user) {
  var userMongoose = new UserMongoose(user);
  userMongoose.save(function(err, savedUser) {
    if (err)
      if (err) throw err;

    return savedUser;
  });
};


exports.read = function(req, res) {
  UserMongoose.findById(req.params.taskId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.update = function(req, res) {
  UserMongoose.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete = function(req, res) {


  UserMongoose.remove({
    _id: req.params.taskId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};
