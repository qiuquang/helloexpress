var express = require('express');
var router = express.Router();

/* GET home page. */
//首页路由
router.get('/', function(req, res, next) {
  // v0.1版  前面是模板文件名  后面是传入到页面中的对象
  // res.render('index', { title: 'Express' });
  // v0.2版  条件渲染
  // res.render('index', { name: '邱全', age: 44, happy: false });
  // v0.3版  循环渲染
  res.render('index', { name: '邱全', list: [
    {id: 1, content: '今天天气不错'},{id: 2, content: '昨天你吃了什么？'},{id: 3, content: '工作好累'}
  ],targetId: 2 });
});

//world路由
router.get('/world', function(req, res, next) {
  // v0.1版  前面是模板文件名  后面是传入到页面中的对象
  res.render('index', { title: 'Hello World!' });
});

router.post('/world', function(req, res, next) {
  // v0.1版  前面是模板文件名  后面是传入到页面中的对象
  res.render('index', { title: 'post Hello World!' });
});

router.put('/world', function(req, res, next) {
  // v0.1版  前面是模板文件名  后面是传入到页面中的对象
  res.render('index', { title: 'put Hello World!' });
});

router.delete('/world', function(req, res, next) {
  // v0.1版  前面是模板文件名  后面是传入到页面中的对象
  res.render('index', { title: 'delete Hello World!' });
});

//car路径  中间件
router.get('/car', function(req, res, next) {
  // v0.1版  前面是模板文件名  后面是传入到页面中的对象
  console.log('这里是中间件');
  // 继续下一步，下一个中间件
  next();
}, function(req, res, next) {
  console.log('这里是返回');
  // 向页面发送数据
  res.send('这里是返回')
});

module.exports = router;
