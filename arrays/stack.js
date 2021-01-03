// Stack class 
class Stack { 

	// Array is used to implement stack 
	constructor() 
	{ 
		this.items = []; 
	} 

	// Functions to be implemented 
	// push(item) 
	// pop() 
	// peek() 
	// isEmpty() 
	// printStack() 
} 

//Push: Adds an element to the stack

// push function 
push(element) 
{ 
	// push element into the items 
	this.items.push(element); 
} 

// // pop function 
pop() 
{ 
	// return top most element in the stack 
	// and removes it from the stack 
	// Underflow if stack is empty 
	if (this.items.length == 0) 
		return "Underflow"; 
	return this.items.pop(); 
} 
