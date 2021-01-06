
function callAndAdd(n, callbackFunction) { //second variable is function
  return n + callbackFunction(); //callBackfubction returns the returnThree function
}

function returnsThree() {
  return 3;
}

let result = callAndAdd(2, returnsThree);

console.log(result);
