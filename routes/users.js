var express = require('express');
var router = express.Router();
var db = require("../dao/db"); //引入数据库封装模块

// 创建 application/x-www-form-urlencoded 编码解析
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', function(req, res, next) {
  db.query("SELECT * FROM ssm",[],function(results,fields){
    console.log(results);
    res.send(results);
  })
});

router.post('/p', urlencodedParser, function (req, res) {
  console.log(req.body)
  // 输出 JSON 格式
  var response = {
    "first_name":req.body.first_name,
    "last_name":req.body.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})
module.exports = router;
