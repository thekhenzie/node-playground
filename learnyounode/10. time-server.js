var net = require('net');

var port = process.argv[2];

var server = net.createServer(function listener(socket) {

    var d = new Date();
    var datestring = `${d.getFullYear()}-${("0" + (d.getMonth() + 1)).slice(-2)}-${("0" + d.getDate()).slice(-2)} ${("0" + d.getHours()).slice(-2)}:${("0" + d.getMinutes()).slice(-2)}\n`;
    socket.end((datestring !== undefined) ? datestring : "test");
});
server.listen(port);