var express = require('express');
var axios = require('axios');
var router = express.Router();

const messages = [];

router.get('/', function(req, res, next) {
	res.send('API: ' + messages);
});

router.get( "/", ( req, res, next ) => {
  res.status( 200 ).json({ messages });
});

router.post( "/", ( req, res, next ) => {
  const message = req.body.message;
  messages.push( message );
  res.status( 200 ).json({ message });
});

module.exports = router;
