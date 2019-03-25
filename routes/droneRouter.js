var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/drone*', function(req, res, next) {
  console.log("rendering drone");
  res.render('test1');
});

module.exports = router;
