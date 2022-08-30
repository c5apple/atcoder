'use strict'

function main(input) {
  const [N, s, t] = input.split('\n')

  let a = N;
  for (let i = t.length; 0 <= i; i--) {
    const ret = s + t.substring(i);
    if (ret.substr(-1 * t.length, t.length) === t) {
      a = ret.length;
      break;
    }
  }
  console.log(a);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));  
