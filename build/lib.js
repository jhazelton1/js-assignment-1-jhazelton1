'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// TODO add comment with problem description
/*

Return: a string formatted as a list of names separated by
commas except for the last two names,
which should be separated by an ampersand.

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

*/

// export default function () {
//   list
// }

var list = exports.list = function list(names) {
  var str = '';

  if (names.length === 1) {
    str += names[0].name;
  }

  if (names.length === 2) {
    str += names[0].name + ' & ' + names[1].name;
  }

  if (names.length > 2) {
    names.map(function (c, i) {
      if (i === names.length - 1) {
        str += c.name;
      } else if (i === names.length - 2) {
        str += c.name + ' & ';
      } else {
        str += c.name + ', ';
      }
    });
  }
  return str;
};

// TODO add solution function and export it