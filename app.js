const express=require('express');
const path=require('path');
var bodyparser=require("body-parser");
const app=express();


//setting static file
app.use(express.static(path.join(__dirname,'build')));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'build','index.html'));
});


//configuring Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


app.listen(8088);
console.log("server the listing the port number 8088");


