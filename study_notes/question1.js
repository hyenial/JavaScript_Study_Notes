
//question 1//
/*
Try predicting what will be printed in the console.log statement below. 
Then, check your prediction by pasting the code into the JavaScript console. 
Functions can be tricky, so try figuring it out before running the code!
*/


function addTen(x) {
  return x + 10;
}

function divideByThree(y) {
  return y / 3;
}

var result = addTen(2);
console.log(divideByThree(result));


//answer: 4 //



// write a text which repeats 3 times of ha//
//output should be hahaha! //

// Declare an empty string
var sound = "" ; 

// An anonymous function expression stored in the variable `laugh`
var laugh = function(num) {

    //write loop
    for (var x = 0 ; x < num ; x++) {
        sound = sound + "ha" ;  
    }
    sound = sound +"!"; 
    return sound; 
}

// It is essential that the function must return a string
console.log(laugh(3)) ;
