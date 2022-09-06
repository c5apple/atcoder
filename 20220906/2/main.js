'use strict'

function main(input) {
  const [A, B, C] = input.split('\n').map(i => [...i]);
  let n = 'a';

  while (true) {
    if (n === 'a') {
      if (!A.length) {
        return console.log('A');
      }
      n = A.shift();
    } else if (n === 'b') {
      if (!B.length) {
        return console.log('B');
      }
      n = B.shift();
    } else {
      if (!C.length) {
        return console.log('C');
      }
      n = C.shift();
    }
  }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));  
