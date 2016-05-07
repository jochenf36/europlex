var express = require('express');
var router = express.Router(); //eslint-disable-line
var resources = require('../resources.js');
var logger = require('../logger.js');

var cards = [];

function getCards() {
  return resources.getEntries({
    content_type: 'cardWithImageAndText',
    order: {
      title: true,
    },
  });
}

getCards().then(function resolver(res) {
  res.items.forEach(function fillCards(item, index) {
    cards[index] = {
      title: item.fields.title,
      image: item.fields.image.fields.file.url,
    };
  });
}).catch(logger.log);

console.log(cards);
/* GET home page. */
router.get('/', function index(req, res) {
  res.render('index', {
    title: req.i18n.__('title'),
    about: req.i18n.__('about'),
    contact: req.i18n.__('contact'),
    location: req.i18n.__('location'),
    lang: req.i18n.getLocale(),
    cards: cards,
  });
});

module.exports = router;
