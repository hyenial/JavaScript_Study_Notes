/* this algorithms returns two sum of given array //
function twoSum(numArray, sum) {
  var pairs = [];
  var hashTable = [];
 
  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterpart = sum - currNum; //to get counter part of the pair, sum - current number gives the counterpart.
    if (hashTable.indexOf(counterpart) !== -1) { // this gives if this is exist. because index cannot be negative value, if it is exist number should start with 0
      pairs.push([ currNum, counterpart ]); // push the numbers of current number and ints counterpart. those two numbers makes pairs. 
    }
    hashTable.push(currNum);
  }
  
  return pairs;
}
 
twoSum([1, 6, 4, 5, 3, 3], 7);
*/

function twoSum(numArray, sum) {
  var hashtable = {};
  var pairs = [];
  
  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var countpart = sum - currNum;    
    if (countpart in hashtable) {
      for (var j = 0; j < hashtable[countpart]; j++) {
        pairs.push([currNum, countpart]);
      }      
    }
    if (currNum in hashtable) {
      hashtable[currNum]++;
    }
    else {
      hashtable[currNum] = 1;
    }
  }
  return pairs;
}
