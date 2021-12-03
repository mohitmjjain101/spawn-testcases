'use strict';

const assert = require('assert');
const mockSpawnModule = require('mock-spawn');
const proxyquire = require('proxyquire');
const sinon = require('sinon');

describe('general use of promises', () => {
  it('should return a promise object', () => {
    // Arrange
    const processor = proxyquire('../spawn3', {
      child_process: {
        spawn: mockSpawnModule()
      }
    });
    var runningProcess = processor({command : {args : {"test" : "test" } , cmd : "git"}});
    assert.ok(typeof runningProcess.then === 'function');
  });
});

describe('unsuccessful commands', () => {
  it('should reject promise with error on exit code > 0', done => {
    // Arrange
    const exitCode = 1;
    const spawnMock = mockSpawnModule();
    const processor = proxyquire('../spawn3.js', {
      child_process: {
        spawn: spawnMock
      }
    });
    spawnMock.sequence.add(spawnMock.simple(exitCode));

    // Act
    processor({command : {args : {"test" : "test" } , cmd : "git"}}).catch(err => {
      // Assert
      assert.equal(err.message, 'Paket command failed to run with exit code: ' + exitCode);
      done();
    });
  });

});