'use strict'

function main(input) {
  const [N, a] = input.split('\n')

  const counts = {};
  a.split(' ').forEach(n => {
    n = Number(n);
    counts[n - 1] = (counts[n - 1] || 0) + 1;
    counts[n] = (counts[n] || 0) + 1;
    counts[n + 1] = (counts[n + 1] || 0) + 1;
  });

  let ans = 0;
  Object.entries(counts).forEach(c => {
    ans = Math.max(ans, c[1]);
  });
  console.log(ans);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));  
