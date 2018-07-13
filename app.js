var express =  require('express');
var app = express();
var http = require('http').Server(app);
app.get('/',function(req,res){
    res.send("xin chao");
});
http.listen(process.env.PORT || 8888, function(){
    console.log('listening on *:8888');
});