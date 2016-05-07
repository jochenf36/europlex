var express = require('express');
var router = express.Router(); //eslint-disable-line
var resources = require('../resources.js');
var logger = require('../logger.js');

var cards = [];
var sortedCards;

function getCards() {
  return resources.getEntries({
    content_type: 'cardWithImageAndText',
  });
}

function getData(res, req) {
  getCards().then(function resolver(result) {
    result.items.forEach(function fillCards(item, index) {
      cards[index] = {
        title: item.fields.title,
        image: item.fields.image.fields.file.url,
        order: item.fields.order,
      };
    });
    sortedCards = cards.sort(function sort(a, b) {
      return a.order - b.order;
    });
    res.render('index', {
      title: req.i18n.__('title'),
      about: req.i18n.__('about'),
      contact: req.i18n.__('contact'),
      location: req.i18n.__('location'),
      lang: req.i18n.getLocale(),
      cards: sortedCards,
    });
  }).catch(logger.log);
}

/* GET home page. */
router.get('/', function index(req, res) {
  getData(res, req);
});

module.exports = router;
