// // var childProcess = require('child_process');
// var spawn = require('child_process').spawn;

//  function init(data, cb) {
 
//   return new Promise((resolve, reject)=>{
//      var output = "";
//     var command = spawn('git', ['init']);
//     // console.log("---------------------")
//     command.stdout.on('data', function (data) {
//       output = output + data
//     });
  
//     command.stdout.on('end', function () {
//       if (output) {
//         // console.log(output , "---")
//          cb(null, output)
//         // output = output
//       }
//       else {
//         // console.log(output , "===========")
//          cb(null, output)
//         // output = output
//       }
//     });
//   })
 

//   // return output;
// }


// exports.init = init;


// // // var childProcess = require('child_process');
// // var spawn = require('child_process').spawn;

// //  async function init(data) {
// //   var output;
  
// //   var command = spawn('git', ['init']);
  
// //   command.stdout.on('data', function (data) {
// //     output = "ABCD"
// //   });

// //   command.stdout.on('end', function () {

// //     if (output) {
// //       console.log(output , "---")
// //      cb(null, output)
// //     }
// //     else {
// //       console.log(output , "===========")
// //      cb(null, output)
// //     }
// //   });
// //   return output
// // }


// // exports.init = init;