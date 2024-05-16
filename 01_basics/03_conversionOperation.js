// let age = 33
// converision of a datatype into number
// ---------------------------------------------------------------------------------------
// for String value
// let score = "40abc"  

// console.log(typeof age);  // o/p -> number
// console.log(typeof (age));  // o/p -> number

// console.log(typeof score);  // o/p -> string
// console.log(typeof (score)); // o/p -> string

// let valueInNumber = Number(score) // conversion of a variable into Number (*Number is a class name)

// console.log(typeof valueInNumber);  // o/p -> number
// console.log(typeof (valueInNumber)); // o/p -> number

// console.log(valueInNumber);  // o/p -> NaN (Not a Number)

// -------------------------------------------------------------------------------------------------------
// for null value
//  score = null
//  valueInNumber = Number(score)

// console.log(typeof valueInNumber);  // o/p -> number
// console.log(typeof (valueInNumber)); // o/p -> number

// console.log(valueInNumber);  // o/p -> 0

// -------------------------------------------------------------------------------------------
// for undefined value
// score = undefined
// valueInNumber = Number(score)

// console.log(typeof valueInNumber);  // o/p -> number
// console.log(typeof (valueInNumber)); // o/p -> number

// console.log(valueInNumber);  // o/p -> NaN 


// -------------------------------------------------------------------------------------------
// for boolean value
// score = true
// valueInNumber = Number(score)

// console.log(typeof valueInNumber);  // o/p -> number
// console.log(typeof (valueInNumber)); // o/p -> number

// console.log(valueInNumber);  // o/p -> 1 for false => 0 

// output for the below value after converted into number
/*
    "33"  => 33
    "33abc" => NaN
    null => 0
    undefined => NaN
    true => 1 | false => 0
*/

// conversion of a datatype into boolean

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof isLoggedIn);  // o/p -> number
// console.log(typeof booleanIsLoggedIn) // o/p -> boolean

console.log(isLoggedIn);  // o/p -> 1
console.log(booleanIsLoggedIn) // o/p -> true


// output for the below value after converted into boolean
/*
    "" => false
    "ashesh" => true
    null => false
    1 => true
    0 => false
    
*/



