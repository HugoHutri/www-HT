var express = require('express');
var router = express.Router();
var mongo = require('mongodb');

const users = [
  {
    username: "admin",
    password: "1234" 
  },
  {
    username: "jappe",
    password: "1234" 
  },
  {
    username: "make",
    password: "1234"
  },
  {
    username: "bart",
    password: "1234" 
  },
  {
    username: "homer",
    password: "1234" 
  },
  {
    username: "lut",
    password: "1234" 
  },
  {
    username: "rsa-official",
    password: "1234" 
  },
  {
    username: "cluster",
    password: "1234"
  }
];


function findInArray(username, password) {
  for (var i = 0,len = users.length; i < len; i++) {
      if ( users[i].username === username && users[i].password === password) { 
          return true;
      }
  }
  return false;
}

router.post( "/", ( req, res, next ) => {
  const user = req.body.user;
  if(findInArray(user.username, user.password))
    res.status( 200 ).json({ user });
  else
    res.status( 200 ).json({user:"0"});
});

module.exports = router;
