var express = require('express');
var router = express.Router();

const posts = [
  {
    name: "admin",
    message:
      "Päivitys tehty"
  },
  {
    name: "jappe",
    message: "JIPPII"
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
    message: "Kannattaa kattoo nopee"
  },
  {
    name: "sale",
    message: "Kaurahiutaleet alennuksessa!"
  },
  {
    name: "kirvesmies",
    message: "Kaikki #teamtrees"
  },
  {
    name: "gamerboy86485",
    message: "Tuleeko kukaan pelaa CS?"
  }
];

// Send posts to API
router.get( "/", ( req, res, next ) => {
  res.status( 200 ).json({ posts });
});

// Add new post to the list
router.post( "/", ( req, res, next ) => {
  const post = req.body.post;
  // Put the post to start of the list
  posts.unshift( post );
  res.status( 200 ).json({ post });
});

module.exports = router;
