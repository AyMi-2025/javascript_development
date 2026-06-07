console.log('normal msg')
console.warn('warning msg')
console.error('error msg')
console.table(['Ayan', 18, 'Kolkata'])




/* =================================================
        Operations 
   ================================================= */


var a
a=10
var b
b=20

console.log(a,b)
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)




/* =================================================
          Primitive Data Types
   ================================================= */

//Number
//Boolean
//String
//Undefined
//Null
//Symbol




/* =================================================
         Non-Primitive Data Types (Reference)
   ================================================= */


// Object
// Array
// Function




/* =================================================
           Alert , Confirm and Prompt
   ================================================= */

// alert('This is an alert message')
// confirm('Are you sure?')
// prompt('What is your name?') 




/* =================================================
          Type Coercion 
   ================================================= */

// Implict
// Explicit




/* =================================================
          Binary Operators
   ================================================= */

// Arthimatic - (+,-,*, %, /)
// Assignment - (a+ = 1, a*= 1)
// Comparsion - (<, > , ==)
// Logical
// Increment & Decrements




/* =================================================
          Increments
   ================================================= */

var b = 10
b++
console.log(b)



/* =================================================
          Pre Increments
   ================================================= */

var c = 10
console.log(c++)
console.log(c)




/* =================================================
          Post Increments 
   ================================================= */

var d = 10
console.log(++d)
console.log(d)

var e = "END"
console.log(e)



/* =================================================
          if-else
   ================================================= */

var n = 10
if (n = 10){
    console.log("Hello");
}


/* =================================================
          Truthy and Falsy
   ================================================= */

// Only 6 :- false, 0 , " " , null , undefined , NaN



/* =================================================
          Switch
           Many Possible values
   ================================================= */


// switch(marks){
//     case marks > 80:
//         console.log("Hello");
//         break;
//         .
//         .
//         .
//         .
//         .
//         .
//         .
//         .
//     default: 
// }



/* =================================================
          While loops 
   ================================================= */
var g = 6

while(g<=5){
    console.log("I will Practice");
    a++    
}

/* =================================================
          Do & While loops 
   ================================================= */

var j = 6

do{
    console.log("Hello")
    a++

}while(j<=5)
      
/* =================================================
          3 Types of Creating Variables 
   ================================================= */

// var - Value Updatable , Function Scoped
// let - Value Updatable , Block Scoped
// const - No Value Updatable , Block Scoped


/* =================================================
          Template Literals 
   ================================================= */

var name ="Jay"
var age = 13

console.log(`Hero's Name ${name} and age is ${age}`)

/* =================================================
          Strings Methods
   ================================================= */

   let s = "Hello, World!";

console.log(s.length);              // 13
console.log(s.toUpperCase());       // "HELLO, WORLD!"
console.log(s.toLowerCase());       // "hello, world!"
console.log(s.indexOf("World"));    // 7  (position of "World")
console.log(s.includes("Hello"));   // true
console.log(s.slice(0, 5));         // "Hello"
console.log(s.substring(7, 12));    // "World"
console.log(s.replace("World", "JS"));   // "Hello, JS!"
console.log(s.split(", "));         // ["Hello", "World!"]
console.log("   hi   ".trim());     // "hi"
console.log("abc".repeat(3));       // "abcabcabc"
console.log(s.startsWith("Hello")); // true
console.log(s.endsWith("!"));       // true
console.log(s.charAt(0));           // "H"
console.log(s[0]);                  // "H" (also works)


/* =================================================
          Functions 
   ================================================= */

function greet(){
   console.log("Good Morning User");
}

greet()

/* =================================================
          Types of Functions 
   ================================================= */

// Function Declaration
function a1(){
   console.log('hello guys !!');
}

// Function Expression 
var a = function(){
   console.log("Helllo !!");
}

// Arrow Function
var c1 = ()=>{
   console.log("Hello !!!");
}
 // One Liner
 var d1 = a => console.log("Hellllo!!");

 /* =================================================
      Immidiately Invoked Function Expression (IIFE)
   ================================================= */

   (function(){
      console.log("IIFE STATEMENT")
   })()

/* =================================================
          Return
   ================================================= */

function add(a,b){
   return a+b
}

/* =================================================
          Pure and Inpure fraction
   ================================================= */

// Pure Fraction ----> Same Input - Same Output
// Impure Fraction ----> Same Input - Different Output






