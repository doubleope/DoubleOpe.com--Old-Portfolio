var express = require('express');
var router = express.Router();


router.get('/cgg', function(req, res, next) {
  res.render('cgg');
});

module.exports = router;
