function greet(message) {
console.log(message);
}
function greeter(name, age) {
return name + " says Hey!! He is " + age + " years old";
}
var message = greeter("harun", 38);
greet(message);

function greeter(name, age) {
var message = name + " says Hey!! He is " + age + " years old";
return function greet() {
console.log(message);
};
}
