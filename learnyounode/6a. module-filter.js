var fs = require('fs');

module.exports = function getFileList(dir, ext, callback) {
    var files = [];
    fs.readdir(dir, function (err, data) {
        if (err)
            return callback(err)
        for (d of data) {
            if (d.includes(`.${ext}`)) {
                files.push(d);
            }
        }
        return callback(null, files);
    });
};

