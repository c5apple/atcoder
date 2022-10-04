'use strict'

function main(input) {
  let _input = input.split('\n');
  // const N = _input[0];
  const ns = _input[1].split(' ');

  let min = Math.min(...ns);

  let _min = [];

  ns.forEach((n1, i1) => {
    ns.filter((n2, i2) => i1 !== i2).forEach(n2 => {
      const m = n2 % n1;
      if (m && m < n2) {
        _min.push(m);
      }
    });
  });

  let _min2 = [];//FIXME
  if (Math.min(..._min) < min) {
    ns.forEach((n1, i1) => {
      _min2.push(n1 % Math.min(..._min));
    });
  }

  console.log(Math.min(..._min2, min));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// ユークリッドの互除法でやれば一瞬ですよ
