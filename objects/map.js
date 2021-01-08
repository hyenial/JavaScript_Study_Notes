/*
Array's map() method is similar to forEach() in that it invokes a callback function for each element in an array. 
However, map() returns a new array based on what's returned from the callback function. 
Check out the following:

*/


const names = ['David', 'Richard', 'Veronika'];

const nameLengths = names.map(function(name) {
  return name.length;
});



