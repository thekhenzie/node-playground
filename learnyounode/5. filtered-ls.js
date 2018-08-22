var fs = require('fs');

var dir = process.argv[2];
var extension = process.argv[3];

fs.readdir(dir, function callback(err, data) {
    if (err) console.log(err);
    for (d of data) {
        if (d.includes(`.${extension}`)) {
            console.log(d);
        }
    }
});
