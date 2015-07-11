var nodejsWebsocket = require("nodejs-websocket");
var server = nodejsWebsocket.createServer(function(connection) {

    console.log("A new connection is established");
    connection.on("text", function(msg) {
        if(msg === "start") {
            timer = setInterval(function(){
                connection.sendText(new Date().toString());
            }, 3000);
        }
        else if(msg === "stop") {
            if(timer) clearInterval(timer);
        }
        else {
            console.log("Unknown message");
        }
    });
    connection.on("error", function() {
       console.log("Something went wrong");
    });

});
server.listen(9090);
console.log("Socket server listening on port 9090");
