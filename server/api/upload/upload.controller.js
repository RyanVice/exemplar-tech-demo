'use strict';

var _ = require('lodash');
var app = require('../../app');

// Get list of uploads
exports.index = function(req, res) {
  res.json([]);
};

exports.create = function(req, res) {
    app.create(req);
};