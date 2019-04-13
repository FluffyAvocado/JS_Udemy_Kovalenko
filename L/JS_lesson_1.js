'use strict'; 
// не допускает выполнения кода, если он обращается к неопределенным данным

/* 
var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};
*/


// Returns Infinity
console.log(3/0);

// Returns NaN, or Not a Number
console.log("asldk3"/0); 

// Returns Undefined. If we remove let, it will return an error — sth is not defined
let sth;
console.log(sth);

// Creates an object with parameters of different kinds of data 
let person = {
    name: "Andrey",
    age: 27,
    isMarried: false
};

console.log(person); // Returns the entire contents of an object

console.log(person.name); // Returns name value

console.log(person["name"]); // Does the same

let arr = ['a.png', 'b.jpg', 'c.svg']; // Creates an array of strings 

console.log(arr[0]); // Returns the first value from the array above. YES, WE COUNT FROM 0 IN JS

// Shows an alert and STOP ALL THE DAMN SCRIPTS ON THE PAGE before user clicks OK
// alert("Hello World!");

// Shoots an alert with the question and prints the result to console
// let answer = confirm("Is there anybody out there?");
// console.log(answer);

// Shoots a prompt with the question and puts YAY into text field as a default answer. 
// Whatever user writes will appear as a string in console
// let answer = prompt("Are you 18 y.o.?", "YAY ");
// console.log(answer);

// For the same code above it will determine the type of data and print it to console
// console.log(typeof(answer));

// Will return a string
console.log("a" + "b");

// Defines vars, increments first and decrements second, prints result
let incr = 10,
    decr = 10;

    incr++; // ++ is a postfix 
    decr--; // -- is a postfix 

console.log(decr, incr);

let incr2 = 10,
    decr2 = 10;

console.log(--decr2, ++incr2); // counts first, then prints

let incr3 = 10,
    decr3 = 10;

console.log(decr3--, incr3++); // prints first, then counts

console.log(5%2); // получится 1, т.е. остаток от деления 5 на 2 

/* 
= это присваивание 
== это проверка на равенство 
=== строгая проверка по типам данных
*/

console.log('2' == 2); // compare values, returns true
console.log('2' === 2); // compare based on data type, returns false 

//________________________________________________// 
let isChecked = false,
    isClose = false;

console.log(isChecked && isClose); // && is an AND operator. Returns true if both values are equal, otherwise false
console.log(isChecked || isClose); // || is an OR operator.  Returns true is one of the values is true
console.log(isChecked || !isClose); // Returns true, because ! provides the opposite value

/* 
почитать про порядо выполнения операторов!
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/