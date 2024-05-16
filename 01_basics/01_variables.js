const accountId = 100;
let accountEmail = "asheshsinha0@gmail.com";
var accountPassword = "password";
accountCity = "Gurugram";   // this type of declaration not reccommended at all

/*
    prefer not to use var
    because of issue in block scope and functional scope
*/


accountEmail = "ashesh@sinha.com";
accountPassword = "pass";
accountCity = "Noida";

//  accountId = 200; // not allowed. const cant be changed or reassigned

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity]);
