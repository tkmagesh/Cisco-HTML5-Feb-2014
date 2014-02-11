var ws = require("nodejs-websocket");
var server = ws.createServer(function(con){
	console.log("A new connection is established");
	con.on("text",function(msg){
		console.log("msg from client - ", msg);
		server.connections.forEach(function(cn){
			cn.sendText(msg);
		});
	});
	con.on("close",function(){
		console.log("an existing connection is closed");
	})

});
server.listen(9090);
console.log("Cisco socket server is listening on port 9090...");