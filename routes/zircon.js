var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('zircon', { title: 'Search Results: Zircon' });
});

module.exports = router;
