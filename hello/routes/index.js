var express = require('express');
var router = express.Router();

/* GET home page. */
//首页路由
router.get('/', function(req, res, next) {
  // v0.1版  前面是模板文件名  后面是传入到页面中的对象
  res.render('index', { title: 'Express' });
});

module.exports = router;
