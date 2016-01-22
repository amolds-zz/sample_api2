var express = require('express');
var router = express.Router();
var logger = require('../logger')(module);

router.get('/', function(req, res, next) {
    logger.debug('get|started');
    res.json('{status:"cool"}');
    logger.debug('get|finished');
});

module.exports = router;