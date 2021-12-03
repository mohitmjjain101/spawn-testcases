// var childProcess = require('child_process');
var spawn = require('child_process').spawn;

function init(data, cb) {
    var output;
    var command = spawn('git', ['init']);

    command.stdout.on('data', function (data) {
        output = "Mohit";
    });

    command.stdout.on('end', function () {
        if (output) {
            cb(null, "test")
        }
        else {
            cb(null, "test")
        }
    });
}

exports.init = init;

