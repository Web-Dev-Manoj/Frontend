// Introduction:
// Javascript is a programming langauge used to develop client side dynamic web pages.
// Javascript is Highlevel, Object oriented and multi-paradigm programming langauge.

// Javascipt can:
// 1. change html content
// 2. change html style attributes and value
// 3. hide and display html content

// if we use js in browser -> it is frontend
// if we use js outside browser -> it is for backend

// History:
// -----------
// Invented by 'Brenden Eich' in '1995'
// 1997 - became ecam standard
// 2015 - major update es6 released
// ECMA - 'European Computer Manfacturer Assosiation'

// Why name javascript:
// First name of Js is Livescript
// at that time java is booming and they thought of keeping a name as a youngerbrother, so named it as javascript
// later it became as ecmascript

// Key Features:
// ----------------
// 1. dynamic
// 2. Asynchronous
// 3. First class functions
// 4. Event driven
// 5. cross platform
// 6. Object oriented

// How to link js to html:
// --------------------------
// 1. using src attribute
// -> can place inside both head and body
//     -> it is recommended to place at last of body, so that the html content will get loaded
// 2. can include as an inline script using < script > tag
//     -> note that script tag must always be closed with starting and ending tags

// Ways to display outputs in js:
// ---------------------------------
// 1. using innerHTML
// 2. using console.log()
// 3. using alert() or window.alert()
// 4. using document.write()
// note; document.write will remove the existing content and override with o / p

// window.print() -> used to print the current window

// Values:
// ----------
// Value is nothing but a piece of information / Data.
// one or two values can form a new value
// eg: 24, 34 + 54

// variables:
// -------------
// what if we want to use the value multiple times ?
//     thats why variables are used:
// variables are containers that store information which can be used later

// eg: x = 25; -> this is called as 'Variable Declaration'
// eg: let x; => this is called as 'Variable definition'

// Rules to declare a variable:
// -------------------------------
// 1. variable name shouldn't start with numbers and symbols (except $ and _)
// 2. variable name should follow camelcase convention, if more than one word is there
// 3. _, $ and digits(0-9) should be allowed
// 4. variables shouldn't be a reserve word (one word that is exceptional is 'name')
// variable names shouldn't be capital words

// Identifiers:
// ---------------
// Each and every variable should be identified by a unique name.these unique names are called as Identifiers
//     -> These are case -sensitive

// variables are two types:
// 1. Declared variables(let x = 25;)
// 2. Undeclared variables(x = 25;)

// variables can be declared in 3 ways:
// ---------------------------------------
// 1.) using 'var'
// var: var is an old way of declaring variables

// eg:
// var x; // initial value of var before assigning any value type will be 'undefined'
// console.log(x);
// x = 35; // once we assign a value, undefined will be 'overrided'
// so, we can say that, var type variables can be override
// console.log(x);

// console.log(x);
// var x;
// here we can say that, var type of variables are hoisted with undefine value -> i.e.., we can access variable before declaration,
// later can assign value

// var x;
// var x = 30;
// var x = 50;
// console.log(x);
// here we can say that, we can redecalre var variables

// 2.) using 'let' and 'const' -> Introduced in Es6(2015)
// let & const:
// we use 'let' to declare variables that can change in the future during computation / execution
// we use 'const' to decalre variables that are not supposed to change in the future

// eg:
// let x; // similar to var, let type variables initially holds 'undefined' value.
// console.log(x);
// x = 30; // once we assign a value, undefined will be 'overrided'
// console.log(x);

// console.log(x);
// let x;
// here we can say that, let type of variables are not hoisted with undefine value like var -> i.e.., we can not access variable before declaration.

// const x = 35;
// x = 40; (error: assignment to a constant variable)
// here we cant override const variables.
// console.log(x);

// const x; (error: missing initializer in const declaration)
// x = 30;
// console.log(x);
// we need to assign value to const variables at the time of declaration itself
// reason:
// 1. const variables can be overrided.
//     so at first,
// const x;
// (x contain 'undefined value')
// now, if we again give as x=30;
// it is nothing but overriding a value

// let x = 10;
// let x = 20;
// const x = 40;
// const x = 35;
// we cannot redeclare let and const variables

// Datatypes:
// -------------
// Datatype defined what type of data does a variable holds.
// datatype if of 2 types:
// 1. Primitive - 7 - (Number, String, Boolean, undefined, null, Symbol, BigInt)
// 2. Objects

// Dynamic typing:
// ------------------
// In javascript, it is not required to mention the type of variable/data.
// Javascript automatically understands.
//     also, one type of variables can change to another type.
// This mechanism is called as dynamic typing.

// typeof operator:
// -------------------
// typeof operator is used to define what type of data does a variable / value is
// eg:
// let x = 20;
// console.log(typeof (x)); // returns number
// console.log(typeof 'manoj') // string
// console.log(typeof true) // boolean
// console.log(typeof null) // object -> kind of bug in js
// console.log(typeof undefined) // returns undefined





