var express = require('express');
var router = express.Router(); //eslint-disable-line

/* GET home page. */
router.get('/', function index(req, res) {
  res.render('about', { title: 'Express' });
});

module.exports = router;