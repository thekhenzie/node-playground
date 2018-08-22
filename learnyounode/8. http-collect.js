var http = require('http');

http.get(process.argv[2], function (res) {
    var body = '';
    res.setEncoding('utf8');
    res.on('data', function (d) {
        body += d;
    });
    res.on('end', function () {
        console.log(body.length);
        console.log(body);
    });
});