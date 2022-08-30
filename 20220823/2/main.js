'use strict'

function main(input) {
  input = input.split("\n");
  const N = input[0];
  const s = [];

  for (let i = 0; i < N; i++) {
    s.push([...input[i + 1]].sort().join(''));    
  }
  console.log(N - (new Set(s.sort())).size);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));  
