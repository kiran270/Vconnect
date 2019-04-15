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
	connection.query(query,function(err,users){
		if(err) throw err;
		else{
			if(users.length==1){
				res.render('securityquestions',{error:false,empid:empid});
			}else{
				res.render('forgotpassword',{error:true,errormessage:"Please check your Employee ID"});
			}
		}
	});
});
app.post('/verifysecurityanswers',function(req,res){
	var empid=req.body.empid;
	console.log(empid)
	var sa1=req.body.sa1;
	var sa2=req.body.sa2;
	console.log(sa1)
	console.log(sa2)
	var query='select * from users where username= ? AND answer1 = ? AND answer2= ?'
	connection.query(query,[empid,sa1,sa2],function(err,users){
		if(err) throw err;
		else{
			if(users.length==1){
				res.render('changepassword',{empid:empid});
			}else{
				res.render('securityquestions',{empid:empid,error:true,errormessage:"Invalid Security Answers"});
			}
		}
	});
});
app.post('/changepassword',function(req,res){
	var empid=req.body.empid;
	var password=req.body.newpassword;
	var query="UPDATE users SET password = ? WHERE username = ?";
	connection.query(query,[password,empid],function(err,result){
		if(err) throw err;
		else{
			if(result.affectedRows==1){
				res.render('success',{error:false});
			}
		}
	});
});