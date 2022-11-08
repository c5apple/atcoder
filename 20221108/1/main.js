'use strict'

function main(input) {

  const [A, B, C] = input.split('\n')[0].split(' ');
  let ans = A * B * C;

  // 中央値
  ans = Math.min(ans, A * B * (C % 2));
  ans = Math.min(ans, B * C * (A % 2));
  ans = Math.min(ans, C * A * (B % 2));

  console.log(ans);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
