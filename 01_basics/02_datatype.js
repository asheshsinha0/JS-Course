"use strict"; // treat all js code as newer version

// alert(3 + 3) // it will not work here because we are using nodejs not browser (In browser everything is document)


// number  => 2 to 2 the power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value // it is an object actually
// undefined => variable declared but value not assigned
// symbol => for uniquness


// object

console.log(typeof null)  // o/p -> object
console.log(typeof undefined) // o/p -> undefined

// two ways to know the type of a variable
let name = "Ashesh";
console.log(typeof 28)  // 1st way using direct value
console.log(typeof name) // 2nd way using variable name;