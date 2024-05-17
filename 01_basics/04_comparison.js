// 
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
 
// conversion inconsistency in js
// console.log("2" > 1); // true
// console.log("02" > 1); // true

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

// console.log(undefined > 0); // false
// console.log(undefined < 0); // false
// console.log(undefined == 0); // false

// === // it checks value strictly means not only it checks value but also checks its datatype

console.log("2" == 2); // true // conversion happens in it
console.log("2" === 2); // false // conversion doesn't happen in it