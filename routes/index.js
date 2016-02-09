var express = require('express');
var router = express.Router(); //eslint-disable-line

/* GET home page. */
router.get('/', function index(req, res) {
  res.render('index', {
    title: req.i18n.__('title'),
    about: req.i18n.__('about'),
    contact: req.i18n.__('contact'),
    location: req.i18n.__('location'),
    lang: req.i18n.getLocale(),
    'mainTitle': req.i18n.__('mainTitle'),
    'mainTitle2': req.i18n.__('mainTitle2'),
    'introP1': req.i18n.__('introP1'),
    'introP2': req.i18n.__('introP2'),
    'introP21': req.i18n.__('introP21'),
    'introP3': req.i18n.__('introP3'),
    'introP4': req.i18n.__('introP4'),
    'introP5': req.i18n.__('introP5'),
    'introP51': req.i18n.__('introP51'),
    'introP52': req.i18n.__('introP52'),
    'introP53': req.i18n.__('introP53'),
    'introP54': req.i18n.__('introP54'),
    'introP55': req.i18n.__('introP55'),
    'introP6': req.i18n.__('introP6'),
    'introP61': req.i18n.__('introP61'),
    'introP62': req.i18n.__('introP62'),
    'introP63': req.i18n.__('introP63'),
    'introP7': req.i18n.__('introP7'),
    'introP8': req.i18n.__('introP8'),
    'introP9': req.i18n.__('introP9'),
  });
});

module.exports = router;
