/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.

*/

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "..." ;
    } else{
      return str;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


/*
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
This means that given an element x, the 'truth test' is passed if func(x) is true. 
If no element passes the test, return undefined.
*/

function findElement(arr, func) {
  let num = 0;

  for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}
