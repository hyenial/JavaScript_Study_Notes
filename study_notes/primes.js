// this script generates prime number

function getPrimes(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}
getPrimes(1000);

console.log(getPrimes(1000));
