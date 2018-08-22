var http = require('http');

var results = [];

var ctr = 0;
function getList(index) {
    http.get(process.argv[2 + index], function (res) {
        var temp = '';
        res.setEncoding('utf8');
        res.on('data', function (data) {
            temp += data;
        });
        res.on('end', function () {
            results[index] = temp;
            ctr++;

            if (ctr == 3) {
                printResults();
            }
        });
    });
}
function printResults() {
    for (var x of results) {
        console.log(x);
    }
}

for (var i = 0; i < 3; i++) {
    getList(i);
}

