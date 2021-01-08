/*
Array's forEach() method takes in a callback function and invokes that function for each element in the array. 
In other words, forEach() allows you to iterate (i.e., loop) through an array, similar to using a for loop
*/
/*
[1, 5, 2, 4, 6, 3].forEach(function logIfOdd(n) {
  if (n % 2 !== 0) {
    console.log(n);
  }
});
*/



const favoriteFlavors = ['cookie dough', 'salted caramel', 'toffee'];

favoriteFlavors.forEach(function(flavor) {
  // debugger;
  console.log('I enjoy ' + flavor + ' ice cream!');
});

