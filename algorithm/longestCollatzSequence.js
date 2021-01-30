/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.

*/


function longestCollatzSequence(limit) {
  	let arr = [0, 1, 2];//initialize the steps required for 0(n/a), 1(1), and 2(2, 1)
	  //this array stores the number of steps required for number (n) at index n
	  //so for eg. arr[16] will store 5 (16, 8, 4, 2, 1)

  	for (let i = 3; i < limit; i++) {//initialize the rest of the array with falsy value
  		arr.push(0);
  	}

  	for (let i = 3; i < limit; i += 2) {
  		if (!arr[i]) { //if this value is still falsy it hasn't been solved yet
  			let wA = []; //working array, stores new unsolved values in an array
  			let wN = i; //working number
  			do {
  				wA.push(wN); //store this value in working array
  				if (wN % 2 === 1) { //if it's odd
  					wN = (wN * 3 + 1) / 2; //guaranteed to be even next, so do 2 steps
  					wA.push(limit); //push an extra "fake" value to keep count accurate
  				} else { // if it's even
  					wN /= 2;
  				}
  			} while (!arr[wN]) //only do this until you reach an already-solved number

  			let count = wA.length; //we pushed 1 number to wA for each step

  			for (let j = 0, c = count; j < count; j++, c--) { 
  				if (wA[j] < limit) { //don't store values >= limit
  					arr[wA[j]] = c + arr[wN]; //in our result array, in the position we solved for, store the steps taken to reach a known value + the known value
  				}
  			}
  		}
  	}

  	let highestNum = 5;
  	let highestIndex = 16;

  
