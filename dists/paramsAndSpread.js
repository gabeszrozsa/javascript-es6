'use strict';

/*jshint esversion: 6 */

function greet() {
  var $greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello World';

  console.log($greeting);
}

greet('Hello');
greet();

var args = [1, 2, 3];

function test() {
  console.log(args);
}

test.apply(null, args);