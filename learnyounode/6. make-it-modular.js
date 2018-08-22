var getFileList = require('./6a. module-filter.js');

var dir = process.argv[2];
var ext = process.argv[3];

getFileList(dir, ext, function (err, data) {
    if (err) console.log(err);
    for(d of data){
        console.log(d);
    }
});