var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'You Are Sad' });
});
router.get('/hello/:words', function(req, res, next) {

  res.send(req.params.words);
});

module.exports = router;
