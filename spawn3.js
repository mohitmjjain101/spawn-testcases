'use strict';
const BPromise = require('bluebird');
const spawn = require('child_process').spawn;

module.exports = command => {
  console.log(command ,"---------------------")
  var args = command.command.args;
  var path = command.command.cmd;

  var paket = spawn(path , args );

  var stdout = '';
  var stderr = '';

  var log = msg => {
    msg = msg.toString('utf8');
    return msg;
  };

  paket.stdout.on('data', msg => {
    stdout += log(msg);
  });
  paket.stderr.on('data', msg => {
    stderr += log(msg);
  });

  return new BPromise((resolve, reject) => {
    paket
      .on('error', err => {
        reject(err);
      })
      .on('exit', code => {
        if (code > 0) {
          var error = stderr ? ': ' + stderr : ' to run with exit code: ' + code;
          reject(new Error('Paket command failed' + error));
          return;
        }
        resolve(stdout);
      });
  });
};