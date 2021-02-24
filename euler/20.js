/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800, and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!

*/

fact = x => {
  let acc = 1n;
  while (x > 1n) {
    acc = acc * --x;
  }
  return acc;
}

function sumDigits(x) {
  let str = x.toString();
  let sum = 0;
  for (let char of str) {
    sum += +char;
  }
  return sum;
}
