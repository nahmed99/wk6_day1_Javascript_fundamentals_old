// Arrays
var sports = ["football", "tennis", "rugby"];

var numberOfElements = sports.length; //NOTE: length is a property, NOT a method

console.log("Number of elements: ", numberOfElements)


// Add elements to an array
sports.push("kabadi");
sports.push("gooli-danda");
sports.push("ludo");

console.log('Sport:', sports);


// Remove stuff from the array:

//remove last element, and return it to use if you need to...
console.log("Just removed", sports.pop()); 

//remove element from the beginning of the array:
console.log("Just removed", sports.shift()); 

console.log('Sport:', sports);