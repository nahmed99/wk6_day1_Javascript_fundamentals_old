/*

var - globally scoped
let - locally scoped, mutable
const - locally scoped, immutable

*/

var name = "Kidda";
console.log('name:', name)

// Dynamically typed - reassign the same variable to a different type.
name = 1;
console.log('name is now:', name)

// null is an INTENTIONAL nothing

var mango = null;
console.log('Mango:', mango)


// undefined is an UNINTENTIONAL nothing, e.g., you defined a variable but not assigned a value to it

var apple;
console.log('Apple:', apple)
