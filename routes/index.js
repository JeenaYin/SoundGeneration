var express = require('express');
var Blob = require('blob');
var lamejs = require('lamejs');
var exp = express();
var router = express.Router();

/* GET home page. */


router.get('/drone-*', function(req, res, next) {
    console.log("received drone request");
    res.render('tone');
});

// router.get('/', function(req, res, next) {
// });

// router.get('/met-*', function(req, res, next) {
//     console.log("receiving met request");
//     console.log(req.baseUrl);
//   // res.render('test1');
// });
module.exports = router;
