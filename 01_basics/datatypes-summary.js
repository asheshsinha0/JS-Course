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

const bigNumber = 13456789654123545698754865459657n // BigInt if n removes then Number type
// console.log(bigNumber);




// primitive 

// 7 types: String, Number, Boolean, null, symbol, undefined, BigInt

// Non-primitive or Reference type

// Array, Objects, Functions

// array type
const Heros = ["Shaktiman", "Naagraj", "Doga"]


// object type 
let myObj = {
    name : "Ashesh",
    age : 34
}

// function

let myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);


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