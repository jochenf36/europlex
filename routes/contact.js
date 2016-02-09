var express = require('express');
var router = express.Router(); //eslint-disable-line

/* GET home page. */
router.get('/', function index(req, res) {
  res.render('contact', {
    title: req.i18n.__('title'),
    about: req.i18n.__('about'),
    contact: req.i18n.__('contact'),
    location: req.i18n.__('location'),
    lang: req.i18n.getLocale() });
});

module.exports = router;
