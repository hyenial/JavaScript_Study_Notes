// this script generates fibonacci numbers
// this script is used recursion function. first algoritm has 2*n time complexity, second script has linear time complexity 

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}


// this script generates fibonacci numbers


function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}


