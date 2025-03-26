//Fundamentals of javascript:
//arrays and objects 
// function return 
// async js coding

//-----------------------Function--------------------------------

//Function is a block of code that can be defined and then called later in the program 
//Function is a first class object in javascript
//Function is a sub type of object
//Function is a reference data type
//Function is a collection of statements

//Function declaration (function declaration is used to define the function)
function greet() {
    console.log("Hello World");
}
greet(); //Hello World

//Function expression (function expression is used to assign the function to a variable)
var greet = function () {
    console.log("Hello World");
}
greet(); //Hello World

//Function with parameters (parameters are used to pass the value to the function)
function greet(name) {
    console.log("Hello " + name);
}
greet("John"); //Hello John

//Function with return statement (return statement is used to return the value from the function)
function greet(name) {
    return "Hello " + name;
}
console.log(greet("John")); //Hello John

//Function with multiple parameters and return statement
function greet(name, age) {
    return "Hello " + name + " your age is " + age;
}

console.log(greet("John", 30)); //Hello John your age is 30

//Function with default parameters (default parameters are used when no argument is passed)
function greet(name = "John", age = 30) {
    return "Hello " + name + " your age is " + age;
}

console.log(greet()); //Hello John your age is 30

//Function with rest parameters (rest parameter is an array)
function greet(...args) {
    return args;
}

console.log(greet(1, 2, 3, 4, 5)); //[ 1, 2, 3, 4, 5 ]

//Function with spread operator (spread operator is used to spread the array)
function greet(name, ...args) {
    return args;
}

console.log(greet("John", 1, 2, 3, 4, 5)); //[ 1, 2, 3, 4, 5 ]

//Function with arrow function (arrow function is used to write the function in a short form)
var greet = () => {
    console.log("Hello World");
}
greet(); //Hello World

//Function with arrow function and return statement
var greet = () => "Hello World";
console.log(greet()); //Hello World

//Function with arrow function and parameters
var greet = (name) => "Hello " + name;
console.log(greet("John")); //Hello John

//Function with arrow function and multiple parameters
var greet = (name, age) => "Hello " + name + " your age is " + age;
console.log(greet("John", 30)); //Hello John your age is 30

//Function with arrow function and default parameters

var greet = (name = "John", age = 30) => "Hello " + name + " your age is " + age;
console.log(greet()); //Hello John your age is 30

//Function with arrow function and rest parameters
var greet = (...args) => args;
console.log(greet(1, 2, 3, 4, 5)); //[ 1, 2, 3, 4, 5 ]

//Function with arrow function and spread operator
var greet = (name, ...args) => args;
console.log(greet("John", 1, 2, 3, 4, 5)); //[ 1, 2, 3, 4, 5 ]

//Function with arrow function and object
var greet = (obj) => obj;
console.log(greet({ name: "John", age: 30 })); //{ name: 'John', age: 30 }

//Function with arrow function and object destructuring
var greet = ({ name, age }) => name + " " + age;

console.log(greet({ name: "John", age: 30 })); //John 30

//Function with arrow function and object destructuring with default parameters
var greet = ({ name = "John", age = 30 }) => name + " " + age;
console.log(greet({})); //John 30

//Function with arrow function and object destructuring with default parameters and rest parameters

var greet = ({ name = "John", age = 30, ...args }) => name + " " + age + " " + args;

console.log(greet({ name: "Smith", age: 40, city: "New York" })); //Smith 40 [object Object]


