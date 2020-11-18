
// You can test your code with a smaller array first
// var test = [12, 29, 11, 3];

// Write your code here
test.forEach(function(item, index){
    if(item%3===0){
        // The commented statements below would not be able to change the value of item
        // because the `item` is a COPY of actual element, while actual is test[index]
        // item = item + 100;
        // console.log("The updated element is "+item+" and actual is "+test[index]);
        test[index]=test[index]+100;
    }
    //else 
    //    console.log("Element "+item+" is not divisible by 3");
});
// console.log(test);

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals = bills.map(function (element) {
    element *= 1.15;
    element = element.toFixed(2);
    element = Number(element);

    return element;
});


/*
// Method 2
var totals = bills.map(function(element) {
    element *= 1.15;
    return Number(element.toFixed(2));
});
*/
console.log(totals);
