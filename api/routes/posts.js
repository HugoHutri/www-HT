var express = require('express');
var router = express.Router();
var mongo = require('mongodb');

const posts = [
  {
    id: 0,
    name: "@hugo",
    message:
      "Ihan ok juttu mutta otteko kuulleet C? Siinä ei esiinny mitään eli kaiken saa cooodaa ite :D Kannattaa tira harkkatyö nopee.",
    likes: "5"
  },
  {
    id: 1,
    name: "@sippo",
    message: "VITTUUUUUUUUUUU",
    likes: "0"
  },
  {
    id: 2,
    name: "@rsa-official",
    message:
      "Pikkujoulut 13.12.2019! Paikka: Sauna, Varustus: Täystaisteluvarustus",
    likes: "128"
  },
  {
    id: 3,
    name: "@make",
    message: "Hugo nukkumaan",
    likes: "44"
  },
  {
    id: 4,
    name: "@homer",
    message: "Ja naurattaahan se tietty :D",
    likes: "2"
  },
  {
    id: 5,
    name: "@lut",
    message: "Ei mulkeroille!",
    likes: "1062"
  },
  {
    id: 6,
    name: "@make",
    message: "Kaikki nukkumaan",
    likes: "4"
  },
  {
    id: 7,
    name: "@cluster",
    message: "Moi ollaan tite",
    likes: "64"
  }
];


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(posts);
});

module.exports = router;
