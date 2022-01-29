//first way

function makeNegative(num){
  if (num>0){
    return -num
  }
  else if (num<0){
    return num
  }
  else {
    return 0
  }
}


// secand way

function makeNegative(num) {
  return -Math.abs(num);
}
