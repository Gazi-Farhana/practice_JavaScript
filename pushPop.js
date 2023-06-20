/*
Push(): adds one or more elements at the end of the array element. Incase of numeric elements, just directly push the number but if the element is a string, must use “” or ‘’ (depends on which cotation is already used on the strings). 
NOTE: multiple elements can be added at the same time.Exp:
*/ 
var numbers = [1, 2, 3, 4];
numbers.push(5);
// console.log(numbers);

var names = ['red', 'green', 'blue'];
names.push('yellow');
names.push('pink');
// console.log(names);

/*
Pop(): removes one or more elements from the end of the array element. No need to call the element inside the pop(). To remove further elements, keep on using pop(). Exp:
*/
var elements = [1, 2, 3, 4, 5];
elements.pop();
elements.pop();
elements.pop();
// console.log(elements);  
// To know which element has been popped out or pushed inside, keep the push or pop value inside a variable. EXP:
var elements = [1, 2, 3, 4, 5];
var poppedElement = elements.pop();
console.log(poppedElement); 

