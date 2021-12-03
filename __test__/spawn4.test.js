const events = require('events');
const proxyquire = require('proxyquire')

var stdout = new events.EventEmitter();
var stderr = new events.EventEmitter();
var spawn = new events.EventEmitter();
spawn.stderr = stderr;
spawn.stdout = stdout;

var child_process = {
  spawn: () => spawn,
  stdout,
  stderr
};

var init = proxyquire("./../spawn4.js", {
  'child_process': child_process
});

describe('Actual test', function () {
  var response;

  it('test your expectation', function () {
      init.init('data', function (err, res) {
          // not able to mock actual functions
        expect(res).toBe("test");
      });
     
  });


});