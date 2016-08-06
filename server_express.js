var express = require('express');
var app = express();
var fs = require('fs')

app.get(/(.+)$/i, function(req, res){
	console.log(req.params[0]);
  	var file_name = __dirname + req.params[0];
  
	fs.exists(file_name,
		function(exists) {
			if(exists){
				res.sendFile(file_name);
			} else {
				res.send('Error 404: File name does not exists');
			}
		}
	);


})

app.listen(80);
