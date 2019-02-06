function printInFrame(list) {
  var list = list.split(' ');
  var longest = longestStr(list).length;
  var leftBorder = '* ';
  var rightBorder = '*';
  var border = repeat('*', longest + leftBorder.length + rightBorder.length); //created left/right border variables
  console.log(border);
  for (word of list) {
    console.log(leftBorder + word + repeat(' ', longest - word.length) + rightBorder); //changed to word.length
  }
  console.log(border);
}

function repeat(str, times) {
  var result = str;

  for (var i = 0; i < times; i++) { //added <= times
    result += str;
  }

  return result;
}

function longestStr(list) {
  let longestSoFar = list[0];
  for (str of list) {
    if (longestSoFar.length < str.length) {
      longestSoFar = str;
    }
  }

  return longestSoFar;
}

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');
