// "use strict";
// JAVASCRIPT
// ----------

console.log(`Javascript is highlevel, interpretered programming language, used to make webpages interactive.`)
console.log(`Javascript is also multiparadigm language, supporting functional, object oriented programming styles.`)

// Founded - Brenden Eich, 1995.
// Became ECMA standard - 1997 [European Computers Manfacturers Association]
// 2015 - Major update - ES6+ released.

// HTML - used to define content of a web page
// CSS - used to define style of a web page
// JS - used to define behaviour of a web page

console.log(`Evolution of JS name : Mocha -> Livescript -> Javascript(after netscape was acquired by Sun microsystems) -> ECMAscript`)

// Key Features of JS:
// 1. Dynamic
// 2. Object - Oriented
// 3. Asynchronous Programming
// 4. Cross platform
// 5. First class functions - functions are treated as any other variables
// 6. Event driven

// What Javascript can do?
// 1. Javascript can change HTML content
// 2. Javascript can change HTML Attribute values
// 3. Javascript can change HTML styles
// 4. Javascript can Hide and Display html elements

// Where to include JS: <head> or <body>
console.log(`we can include JS content inside <head> and <body> tag using <script> tag, but it is best practise to add inside <body>. also, we can add as many scripts we want.`)
console.log(`we can also include JS content using external way. we use <script> tag and src attribute. note: we don't include <script> tags inside external js file.`)
//eg:
// < head >
// <script>
//     console.log('Hello world');
// </script>
// </head >

// Advantages of external way of including js:
// 1. Seperates HTML and CSS
// 2. Increase Execution speed/ page loading speed
// 3. Easy to read and maintain

// JS Outputs: javascript outputs can be displayed in multiple ways
// 1. console.log()
// 2. document.write()
// 3. innerHTML // to modify the HTML element itself
// 4. innerText // to modify the content inside particular element
// 5. alert()
// 6. print() // used to print current web page

// STATEMENTS
console.log(`A javascript program is a set of instructions that perform certain task/ action
In programming language, these instructions are called as 'Statements'
each and every statement, ends with semicolon (;)
These statements doesn't return any value, instead just executes the action.`);

// VALUE
console.log(`Value is nothing but a piece of data/ information that a program can manipulate.`)
// multiple values combines to form another value.
console.log(2 + 10);
console.log('Sai kumar ' + 'Venkat')

// VARIABLES
console.log(`Variables are named containers that stores certain information/ values.`)
// each and every variables will be identified by unique name.
// variables can be declared (i.e.., created using Automatically, var, let and const)
// rules:
// 1. Name shouldn't start with numbers or special chars (except _ and $)
// 2. Name shouldn't be a keywords
// 3. camelcase should be followed
// 4. case -sensitive
// 5. should contains numbers in between

let a; // Variable declaration
a = 25; // Variable Assignment
console.log('The value of a is ', a);

// if we declare variable and doesn't assign any value, it will hold 'undefined'
let b;
console.log(b);

// variables are of two types: 1.) Declared variables 2.) Undeclared variables
// Declared variables are the variables, that are explicitly declared using var, let and const keywords before using them.
let c = 120;
console.log(c);

// Undeclared variables is used without first being declared.
d = 10;
console.log(d);

// we use 'var' keyword to declare variable that can change in the future during execution.
c = c * 20;
console.log('c changed to ', c);

// we use 'const' keyword to declare variables that are not supposed to change at any point of time in the future.
const e = 210;
// if we try manipulating const variable:
// e = e * 10; // script.js:99 Uncaught TypeError: Assignment to constant variable.
// also, for const type of variables, we need to assign value, while declaring.
// eg: const e; //  script.js:101 Missing initializer in const declaration
console.log(e);

// redeclaring var and const variables are not allowed. where are variables declared using var can be redeclared.
// let e;
// let e = 100; // not allowed
var f;
var f = 200; // redeclaring var variables doesn't cause error.
console.log(f);

// IDENTIFIERS
console.log(`Each and every variable should be identified by a unique name. Identifiers are the names used to identify variables, functions, classes and other entities in Javascript. (simply, user defined name used to refer a value stored in memory)`)

// SYNTAX
console.log(`Javascript syntax is a set of rules and regulations that defined how a javascript programs are developed and Interpreterd.`)

// FUNCTIONS
console.log(`Functions in javascript or in any programming language, is a reusable block of code used to perform certain task.
they accept inputs called parameters and may return a value.`);
// functions are of three types: 
// 1.) Function Declaration
// -> can be called before declare, because these are hoisted.
function add(a, b) {
    return a + b;
}
// 2.) Function Expression
// -> we should call by using variable name. add() in the below example.
// -> these are not hoisted, i.e.., we should define before invoking
const add1 = function (a, b) {
    return a + b;
}
// edge case: we can also name funtion expressions:
const add2 = function addname(a, b) {
    return a + b;
}
// 3.) Arrow Functions
// -> These are also not hoisted.
// -> Introduced in ES6(2015)
const add3 = (a, b) => {
    return a + b;
}
console.log(add2(13, 10));

// ANONYMOUS FUNCTION
console.log(`Anonymous function is a function without name. it is typically used as function expressions.
    often, passed as an argument in another functions (call backs).`)

const anonymous = function (a, b) {
    return a + b;
}
setTimeout(function () { // will run the code, after mentioned time interval.
    console.log('Print');
}, 1000);

// IIFE (Immediately Invoked Function Expressions)
console.log(`An IIFE(Immediately Invoked Function Expression) is function that invokes/runs immediately after it is defined.
    it is usually used to create a private scope and avoid pollution global namespace.`);
(function () {
    let a = 100, b = 200;
    console.log(`The value of a and b is ${a} ${b}`);
})()


// HIGHER ORDER FUNCTIONS (HOC) 
console.log(`Higher order functions (HOC) are functions that does atleast one of the following:
    1. take another function as an argument.
    2. returns a function as its result/return value`);

function greet(name) {
    return `Hello ${name}`;
}
function message(name, callback) { // HOC : takes another function, and returns function as a result.
    return callback(name);
}
console.log(message("manoj", greet));

// THIS keyword
console.log(`this keyword refers to an object that is executing the current function.`);

// in object, this refers to current object.
const obj1 = {
    name: 'saikumar',
    print: function () {
        return this.name;
    }
}

console.log(obj1.print());

// in function (non strict mode), this refers to global object.
// in function (strict mode), this refers to undefined.

function print1() {
    console.log(this);
}

print1()

// in arrow functions, thsi refers to lexical scope. i.e.., outer scope.
const print2 = () => {
    console.log(this);
}
print2();






// XMLHttpRequest
// const rqst = new XMLHttpRequest();
// rqst.open('GET', 'https://restcountries.com/v3.1/name/eesti');
// rqst.send();

// rqst.addEventListener('load', () => {
//     let [data] = JSON.parse(rqst.responseText);
//     console.log(data);
//     console.log('The country is ' + data.name.common)

//     let neighbors = [...data.borders];

//     console.log('The borders informations is: ')
//     for (let i = 0; i < neighbors.length; i++) {
//         console.log(neighbors[i])
//         const rqst2 = new XMLHttpRequest();
//         rqst2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbors[i]}`);
//         rqst2.send();
//         rqst2.addEventListener('load', () => {
//             let [neighbors_data] = JSON.parse(rqst2.responseText);
//             console.log(neighbors_data.name.common);
//         })
//     }
// })


// fetchAPI
// let apicall = fetch('https://restcountries.com/v3.1/name/eesti')
//     .then((response) => response.json())
//     // .then((data) => console.log(data[0].borders[0]));
//     .then((data) => {
//         for (let i = 0; i < data[0].borders.length; i++) {
//             fetch(`https://restcountries.com/v3.1/alpha/${data[0].borders[i]}`)
//                 .then((response) => response.json())
//                 .then(data => console.log(data[0].name.common)); // The returned value is the fulfilled value of a promise.
//             //
//         }
//     })
// console.log(apicall)