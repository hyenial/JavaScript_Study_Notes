
function callAndAdd(n, callbackFunction) {
  return n + callbackFunction(); //callBackfubction returns the returnThree fubction
}

function returnsThree() {
  return 3;
}

let result = callAndAdd(2, returnsThree);

console.log(result);
