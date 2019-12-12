var express = require('express');
var router = express.Router();

const posts = [
  {
    name: "admin",
    message:
      "Database poistettu"
  },
  {
    name: "jappe",
    message: "VITTUUUUUUUUUUU"
  },
  {
    name: "liisa",
    message:
      "Uusia lihatuotteita myynnissä"
  },
  {
    name: "nalle",
    message: "oorrait"
  },
  {
    name: "homer",
    message: "Ja naurattaahan se tietty :D"
  },
  {
    name: "lut",
    message: "Ei mulkeroille!"
  },
  {
    name: "kirvesmies",
    message: "Kaikki teamtrees"
  },
  {
    name: "cluster",
    message: "Moi ollaan tite"
  }
];

router.get('/', function(req, res, next) {
  res.json(posts);
});

router.get( "/", ( req, res, next ) => {
  res.status( 200 ).json({ posts });
});

router.post( "/", ( req, res, next ) => {
  const post = req.body.post;
  posts.unshift( post );
  res.status( 200 ).json({ post });
});

module.exports = router;
