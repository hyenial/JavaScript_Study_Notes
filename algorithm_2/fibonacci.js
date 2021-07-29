/*
Question: How do get nth Fibonacci number?

Answer: I create an array and start from iterate through.

Fibonacci series is one of the most popular interview question for beginners. so, you have to learn this one.

*/

function fibonacci(n){
  var fibo = [0, 1];
  
  if (n <= 2) return 1;

  for (var i = 2; i <=n; i++ ){
   fibo[i] = fibo[i-1]+fibo[i-2];
  }

 return fibo[n];
} 

fibonacci(n);

# way2
function fibonacci(n){
  if(n<=1)
    return n;
  else
    return fibonacci(n-1) + fibonacci (n-2);  
}

# fibonacci(12);
#  = 144
         
