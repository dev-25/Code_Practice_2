// Find prime numbers from 1 ....n 

function findPrimes(n) {
    const primes = [];
  
    for (let num = 2; num <= n; num++) {
      let isPrime = true;
  
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
      }
    }
    return primes;
}  
console.log(findPrimes(200));