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


/* =================================================
          Arrays
   ================================================= */
 
var arr1 = [10,20,30,40,50]  // Array
console.log(arr1[3])  //Op:- 40

// Updating an Array ----------------------------------
arr1[4] = 90 // Updated the index 4 to 90

// Length of an Array --------------------------------
console.log(arr1.length)

// Push ----------------------------------------------
arr1.push(99) // last me add karta hai

// Pop ----------------------------------------------
arr1.pop() // last me se delete karta hai

// Unshift -----------------------------------------
arr1.unshift(1) // first mein add karta hai

//Shift --------------------------------------------
arr1.shift() // first mein delete karta hai 

// Splice ------------------------------------------
// arr1.splice(start_index , delete_count)
arr1.splice(1,2)

// arr1.splice(start_index , delete_count , new_items)
arr1.splice(1,2,33)

// Concat ------------------------------------------
arr.concat(arr2)

// Join -------------------------------------------
arr.join('-')

// forEach -------------------------------------------
let nums = [1, 2, 3];
nums.forEach(function(n) {
    console.log(n * 2);
});
// 2, 4, 6

// map ----------------------------------------------
let nums = [1, 2, 3, 4];
let doubled = nums.map(n => n * 2);
console.log(doubled);   // [2, 4, 6, 8]
console.log(nums);      // [1, 2, 3, 4] ← unchanged

// filter ------------------------------------------
let nums = [1, 2, 3, 4, 5, 6];
let evens = nums.filter(n => n % 2 === 0);
console.log(evens);   // [2, 4, 6]

// reduce -------------------------------------------
let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);   // 10

// find -------------------------------------------
let users = [{name: "A", age: 20}, {name: "B", age: 30}];
let user = users.find(u => u.age > 25);
console.log(user);   // {name: "B", age: 30}

// findIndex ---------------------------------------
let nums = [10, 20, 30, 40];
let idx = nums.findIndex(n => n > 25);
console.log(idx);   // 2

// some --------------------------------------------
let nums = [1, 2, 3];
console.log(nums.some(n => n > 2));   // true
console.log(nums.some(n => n > 10));  // false

// every --------------------------------------------git 
let nums = [1, 2, 3];
console.log(nums.every(n => n > 0));   // true
console.log(nums.every(n => n > 2));   // false


