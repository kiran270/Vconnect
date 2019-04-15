var express=require('express');
var app=express();
app.listen(5000);
var mysql=require('mysql');
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/JS_And_CSS'));
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser());
var request = require('request');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'kumar',
  database : 'vconnect'
});
app.get('/',function(req,res){
	res.render('forgotpassword',{error:false});
});
app.post('/verifyEmpid',function(req,res){
	var empid=req.body.empid;
	var query='select * from users where username= '+empid;
	connection.query('select * from users',function(err,users){
		if(err) throw err;
		else{
			if(users.length==1){
				res.render('securityquestions',{empid:empid});
			}else{
				res.render('forgotpassword',{error:true,errormessage:"Please check your Employee ID"});
			}
		}
	});
});