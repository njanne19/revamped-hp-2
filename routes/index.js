var express = require('express');
var router = express.Router();
var userAgent = require('useragent');

/* GET home page. */
router.get('/', function(req, res, next) {

	var agent = userAgent.parse(req.headers['user-agent']);
	agent.toJSON();

	var language = req.headers['accept-language'].split(',');
	language = language[0];

	 var ip = req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;


	res.json({"browser": agent['family'], "ip": ip, "viewingLanguage": language});
});

module.exports = router;
