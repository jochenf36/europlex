var express = require('express');
var router = express.Router(); //eslint-disable-line
var marked = require('marked');
var resources = require('../resources.js');
var logger = require('../logger.js');

var contents;
var machines = [];
var skills = [];

function getMainContent() {
  return resources.getEntry('59TwPw6IhyYYEmgMmK6oiE');
}

function getMachines() {
  return resources.getEntries({
    content_type: 'machine',
    order: {
      name: true,
    },
  });
}

function getSkills() {
  return resources.getEntries({
    content_type: 'skill',
    order: {
      name: true,
    },
  });
}

function getData(res, req) {
  getMainContent().then(function renderMainContent(contentResult) {
    contents = contentResult.fields;

    getMachines().then(function renderMachines(machineResult) {
      machines = machineResult.items;

      getSkills().then(function renderSkills(skillsResult) {
        skills = skillsResult.items;

        res.render('about', {
          marked: marked,
          home: req.i18n.__('home'),
          title: req.i18n.__('title'),
          about: req.i18n.__('about'),
          contact: req.i18n.__('contact'),
          location: req.i18n.__('location'),
          lang: req.i18n.getLocale(),
          paragraph1: contents.paragraph1,
          paragraph2: contents.paragraph2,
          paragraph3: contents.paragraph3,
          paragraph4: contents.paragraph4,
          paragraph5: contents.paragraph5,
          paragraph6: contents.paragraph6,
          paragraph7: contents.paragraph7,
          paragraph8: contents.paragraph8,
          machines: machines,
          skills: skills,
        });
      });
    }).catch(logger.log);
  });
}

/* GET home page. */
router.get('/', function index(req, res) {
  getData(res, req);
});

module.exports = router;
