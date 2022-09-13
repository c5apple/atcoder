'use strict'

function main(input) {
  let _input = input.split('\n');
  const T = _input[0];
  const cases = _input.slice(1);

  cases.forEach(cs => {
    let kouhos = [];
    // console.log('-----');
    // console.log(cs);

    let idx = 0;
    for (let idx = 0; idx < cs.length / 2; idx++) {
      let str = Number(cs.substring(0, idx + 1));
      while (0 <= str) {
        let strn = `${str}`.repeat(2);
        // console.log(`str=${str}`);
        // console.log(`strn=${strn}`);

        let kouho = `${str}`.repeat(cs.length / `${str}`.length);
        if (kouho.length === cs.length && BigInt(kouho) <= BigInt(cs)) {
          kouhos.push(kouho);
        }

        if (`${str}`.substr(-1) === '0') {
          break;
        }
        str--;
      }
    }
    console.log(kouhos.sort().pop());
  });
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
/*
498650499498649123
498650498650498650
498650499498650499

444444444444444444 // 先頭１個
333333333333333333 // 先頭１個-1
494949494949494949 // 先頭２個
484848484848484848 // 先頭２個-1
...

これらを列挙して、maxをとればよい
*/
