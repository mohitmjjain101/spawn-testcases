// var assert = require('assert');
// var proxyquire = require('proxyquire')

// var index = proxyquire('../sum.js', {
//   'child_process': {
//     spawnSync: function (command, args) {
//       return {
//         stdout: {
//           toString: () => "git init success string"
//         }
//       };
//     }
//   }
// });

// var sinon = require('sinon');
// // var proxyquire = require('proxyquire');

// describe('test', function () {
//   it(
//     'tests'
//     ,function () {
//       sinon.assert.match(index.init(), "git init success string");
//     } 
//   )
// });


// var mockSpawn = require('mock-spawn');
// import { spawn } from 'child_process';
// var init = require('./../sum')
// var mySpawn = mockSpawn();
// require('child_process').spawn = mySpawn;

// mySpawn.setDefault(mySpawn.simple(1 /* exit code */, 'hello world' /* stdout */));
// mySpawn.sequence.add(mySpawn.simple(0));
// mySpawn.sequence.add(mySpawn.simple(1));
// mySpawn.sequence.add(function (cb) {
//     setTimeout(function () { return cb(2); }, 2000);
// });
// mySpawn.sequence.add(function (cb) {
//     // test the error handling of your library
//     this.emit('error', new Error('spawn ENOENT'));
//     setTimeout(function() { return cb(8); }, 10);
// });
// mySpawn.sequence.add({throws:new Error('spawn ENOENT')});
// describe('test', function () {
//   test('actual test ', function(){
//    let data =  init();
//    console.log(data)
//    expect(data);
//   })
// })