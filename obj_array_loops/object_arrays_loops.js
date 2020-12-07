// Arrays
var sports = ["football", "tennis", "rugby"];

var numberOfElements = sports.length; //NOTE: length is a property, NOT a method

console.log("Number of elements: ", numberOfElements)


// Add elements to an array
sports.push("kabadi");
sports.push("gooli-danda");
sports.push("ludo");
sports.push("cricket");
sports.push("darts");
sports.push("snooker");


console.log('Sport:', sports);


/*
// Remove stuff from the array:

// remove last element, and return it to use if you need to...
console.log("Just removed from end of array", sports.pop()); 

// remove element from the beginning of the array:
console.log("Just removed from beginning of array", sports.shift()); 

// Remove/modify elements from the miffle of the array, using splice
// array_name.splice(index_position, num_of_elements_to_remove_from_position, replacement_value)


console.log("Before single splice", sports); 
sports.splice(1,1)
console.log("Before multi-delete splice", sports); 
sports.splice(1,2)
console.log("Before multi-delete AND replacement splice", sports); 
sports.splice(1,1, "new", "another new", "and another new")
console.log("After splice", sports); 


console.log('Sport:', sports);

*/

for (var currentSport of sports) {
    var uppercasedSport = currentSport.toLocaleUpperCase();
    console.log(uppercasedSport);
}

