var assert = require('assert');
const exp = require('constants');
var mockSpawn = require('mock-spawn');
var mySpawn = mockSpawn();
require('child_process').spawn = mySpawn;
mySpawn.sequence.add(mySpawn.simple(0, 'Hello'));

describe('test', function () {
    test('actual test ', () => {
        const init = require('../spawn2.js');
        init.init("data", function (err, output) {
            var call = mySpawn.calls[0];
            // not fullfulling actual purpose running actual command
            expect(call.command).toBe('git')
            expect(output.toString()).toBe("Hello")
        })

    })
})


// as per example by mock-spawn we are passing cmd from test file to actual code and checking on that.