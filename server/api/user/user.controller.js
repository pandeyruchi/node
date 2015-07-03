'use strict';

var User = require('./user.model');

//This method returns error response
var validationError = function (res, err) {
    return res.json(422, err);
};


//This methiod saves the entry in database else returns error
exports.index = function (req, res) {
    User.find(function (err, users) {
        if (err) return res.send(500, err);
        res.json(200, users);
    });
};

/**
 * Creates a new user
 */
exports.create = function (req, res) {

    User.create(req.body, function (err, users) {
        if (err) return validationError(res, err);
        res.json(201, users);
    });
};


