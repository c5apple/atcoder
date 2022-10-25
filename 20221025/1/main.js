'use strict'

function main(input) {

  const [h1, h2, h3, w1, w2, w3] = input.split('\n')[0].split(' ');

  // console.log(h1, h2, h3, w1, w2, w3);

  // a,b,c
  // d,e,f
  // g,h,i


  // a+b+c = h1;
  // d+e+f = h2;
  // g+h+i = h3;
  // a+d+g = w1;
  // b+e+h = w2;
  // c+f+i = w3;

}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

/*

左上の4つを決めたら、残りの枠は計算で出る
*/