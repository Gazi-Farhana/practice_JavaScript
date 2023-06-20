var elements = [12, 16, 14, 18, 95, 93, 28];
// to get element by index number:
console.log(elements[3]);
// to set a new element /replace the existing element using index:
elements[1] = 777;
console.log(elements[1]);
//indexOf: to find the index of an element.
var indexNumber = elements.indexOf(95);
console.log(indexNumber);
// when you look for element which is not present inside the array, then the outcome is -1.
var noNumber = elements.indexOf(350);
console.log(noNumber);