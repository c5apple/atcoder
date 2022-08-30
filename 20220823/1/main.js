'use strict'

function main(input) {
  const expect = 'AKIHABARA';

  if (expect.length < input.length) {
    return console.log('NO');
  }

  for (let p = 0; p < expect.length + 1; p++) {
    if (input.substring(0, p) === expect.substring(0, p)) {
      continue;
    } else {
      input = input.substring(0, p - 1) + 'A' + input.substring(p - 1);
    }
  }
  if (input === expect) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));  
