// javascript is a dynamically type language

// const score = 100 // number
// const scoreValue = 100.3 // number
// const isLoggedIn = false // boolean
// const outsideTemp = null // null
// let userEmail   // undefined type

// const id = Symbol('123') // Symbol
// const anotherId = Symbol('123') // Symbol

// console.log(id);
// console.log(anotherId);

// console.log(id === anotherId);

// const bigNumber = 13456789654123545698754865459657n // BigInt if n removes then Number type
// console.log(bigNumber);




// primitive 

// 7 types: String, Number, Boolean, null, symbol, undefined, BigInt

// Non-primitive or Reference type

// Array, Objects, Functions

// array type
// const Heros = ["Shaktiman", "Naagraj", "Doga"]


// object type 
let myObj = {
    name : "Ashesh",
    age : 34
}

// function

let myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// **********************************************
/*
1) Primitive Datatypes
    typeof val  => result
    ----------------------
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/

// stack (Primitive)  and heap memory (Non-Primitive or Reference type) in js
// example of stack memory
let name1 = "Ashesh"

let anotherName = name1; // copy of name1 is provided but not reference so original value doesn't change
 
anotherName = "Aneet"

console.log(name1) // original value doesn't change
console.log(anotherName); // 

// example of heap memory

let user1 = {
    email : "ashesh@google.com",
    age : 34
}

let user2 = user1; // copy of user1 is not provided here instead reference is provided

console.log(user1);
console.log(user2);

user2.email = "aneet@google.com" // it will change the original value as well because it has access to reference of user1

console.log(user1);
console.log(user2);

