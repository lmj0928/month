var express = require('express');
var router = express.Router();
var mongo=require('mongodb-curd');

var db="lmj";
var com="month";

/* GET home page. */
router.get('/api/getData', function(req, res, next) {
 mongo.find(db,com,{},function(result){
   if(result.length===0){
     res.json({code:0,msg:"查询失败"})
   }else{
      res.json({code:1,msg:"查询成功",data:result})
   }
 })
}); //渲染

router.get('/api/getUser', function(req, res, next) {
  var id=req.query.id;
 mongo.find(db,com,{"_id":id},function(result){
   if(!result){
     res.json({code:0,msg:"查询失败"})
   }else{
      res.json({code:1,msg:"查询成功",data:result})
   }
 })
}); //传id过去

router.get('/api/delete', function(req, res, next) {
   var id=req.query.id;
 mongo.remove(db,com,{"_id":id},function(result){
   if(!result){
     res.json({code:0,msg:"删除失败"})
   }else{
      res.json({code:1,msg:"删除成功",data:result})
   }
 })
}); //删除

router.get('/api/addData', function(req, res, next) {
  var obj=req.query;
 mongo.insert(db,com,obj,function(result){
   if(result.length===0){
     res.json({code:0,msg:"增加失败"})
   }else{
      res.json({code:1,msg:"增加成功",data:result})
   }
 })
}); //增加

router.get('/api/update', function(req, res, next) {
   var obj=req.query;
    var id=req.query.id;
 mongo.update(db,com,[{"_id":id},obj],function(result){
   if(result.length===0){
     res.json({code:0,msg:"修改失败"})
   }else{
      res.json({code:1,msg:"修改成功",data:result})
   }
 })
});  //修改

module.exports = router;
