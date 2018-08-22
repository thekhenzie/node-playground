var http = require('http');

var link = process.argv[2]
http.get(link, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
        console.log(data);
    });
    response.on('error', console.error);
}).on('error', console.error);