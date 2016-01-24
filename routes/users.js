var express = require('express');
var router = express.Router(); //eslint-disable-line

function getUsers(req, res) {
  res.send('respond with a resource');
}

/* GET users listing. */
router.get('/', getUsers);
module.exports = router;
