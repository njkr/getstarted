


var http=require("http");
http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.end(function(){});
}).listen(9000,'127.0.0.1');
console.log("server is stsrted"); 



 /* var book = require('./books.js');
console.log('Name: ' + book.name);
book.read(); */


