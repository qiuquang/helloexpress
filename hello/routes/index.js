var express = require('express');
var router = express.Router();

/* GET home page. */
//首页路由
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
