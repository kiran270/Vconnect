var express=require('express');
var app=express();
app.listen(5000);
var mysql=require('mysql');
app.use(express.static(__dirname + '/images'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser());
var request = require('request');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'kumar',
  database : 'cricket'
});
app.get('/',function(req,res){
	res.render('forgotpassword');
});