// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Bristol', function(err, temp){
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(89);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('London').then(function(temp) {
//   console.log('success', temp);
// }, function (err) {
//   console.error(err);
// });

// Challenge Area

function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('one of argument, not number');
    }
  });
};

addPromise(5,6).then(function(result) {console.log(result);}, function(result) {console.log(result);});
addPromise('five',6).then(function(result) {console.log(result);}, function(result) {console.log(result);});
