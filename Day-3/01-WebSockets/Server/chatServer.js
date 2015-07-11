var nodejsWebsocket = require("nodejs-websocket");
var server = nodejsWebsocket.createServer(function(connection) {

    console.log("A new connection is established");
    connection.on("text", function(msg) {

        server.connections.forEach(function(con) {
            con.sendText(msg);
        })

    });
    connection.on("error", function() {
       console.log("Something went wrong");
    });

});
server.listen(9090);
console.log("Socket server listening on port 9090");
