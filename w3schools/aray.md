## loop in aray
``` var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
```

## `Array.forEach()` function:
`Array.forEach()` calls a function for each array element.


```
var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];

text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}
```
## Splicing an Array
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
```
- The first parameter (2) defines the position where new elements should be added (spliced in).

- The second parameter (0) defines how many elements should be removed.

- The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

- The `splice()` method returns an array with the deleted items:

