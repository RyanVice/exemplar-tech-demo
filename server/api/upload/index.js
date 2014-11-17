'use strict';

var express = require('express');
var controller = require('./upload.controller');

var multipart = require('connect-multiparty');
var multipartMiddleware =  multipart({ uploadDir: './data/uploads' });

var router = express.Router();

router.get('/', controller.index);
router.post('/', multipartMiddleware, controller.create);

module.exports = router;