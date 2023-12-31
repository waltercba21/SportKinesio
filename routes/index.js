var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros');
})
router.get('/kinesiologia', function(req, res, next) {
  res.render('kinesiologia');
})
router.get('/ortopedia', function(req, res, next) {
  res.render('ortopedia');
})
router.get('/plantillas', function(req, res, next) {
  res.render('plantillas');
})
module.exports = router;
