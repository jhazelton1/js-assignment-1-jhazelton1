'use strict';

var _lib = require('./lib.js');

var namesOne = [{
  name: 'Bart'
}, {
  name: 'Lisa'
}, {
  name: 'Maggie'
}]; // TODO import solution function from lib.js


var namesTwo = [{
  name: 'Bart'
}, {
  name: 'Lisa'
}];

var namesThree = [{
  name: 'Bart'
}];

var namesFour = [{
  name: 'Bart'
}, {
  name: 'Lisa'
}, {
  name: 'Maggie'
}, {
  name: 'Homer'
}, {
  name: 'Marge'
}];

var namesFive = [];

console.log((0, _lib.list)(namesOne));
console.log((0, _lib.list)(namesTwo));
console.log((0, _lib.list)(namesThree));
console.log((0, _lib.list)(namesFour));
console.log((0, _lib.list)(namesFive));

// TODO add some example test cases and log their results to the console