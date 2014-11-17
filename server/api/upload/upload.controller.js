'use strict';

var _ = require('lodash');
var app = require('../../app');
var path = require('path');

// Get list of uploads
exports.index = function(req, res) {
  res.json([]);
};

exports.create = function (req, res, next) {
    var data = _.pick(req.body, 'type'),
        file = req.files.file;

    console.log(file.name); //original name (ie: sunset.png)
    console.log(file.path); //tmp path (ie: /tmp/12345-xyaz.png)

    res.json({
        filePath: file.path
    });
};