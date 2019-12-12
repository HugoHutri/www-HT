var express = require('express');
var router = express.Router();
var mongo = require('mongodb');

const posts = [
  {
    name: "hugo",
    message:
      "Ihan ok juttu mutta otteko kuulleet C? Siinä ei esiinny mitään eli kaiken saa cooodaa ite :D Kannattaa tira harkkatyö nopee."
  },
  {
    name: "sippo",
    message: "VITTUUUUUUUUUUU"
  },
  {
    name: "rsa-official",
    message:
      "Pikkujoulut 13.12.2019! Paikka: Sauna, Varustus: Täystaisteluvarustus"
  },
  {
    name: "make",
    message: "Hugo nukkumaan"
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
    name: "make",
    message: "Kaikki nukkumaan"
  },
  {
    name: "cluster",
    message: "Moi ollaan tite"
  }
];

/* GET users listing. */
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
