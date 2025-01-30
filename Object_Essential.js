//Fundamentals of javascript:
//arrays and objects 
// function return 
// async js coding

//-----------------------Object--------------------------------

//Object is a collection of key value pair 
//Object is a non primitive data type in javascript
//Object is mutable in nature
//Object is a reference data type
//Object is a collection of properties and methods
//Object is a collection of key value pair

var obj = {
    name: "John",
    age: 30,
    city: "New York"
}

console.log(obj); //{ name: 'John', age: 30, city: 'New York' }

//Accessing the object properties
console.log(obj.name); //John
//Accessing the object properties using bracket notation
console.log(obj["city"]); //New York



//value of the object is mutable (can be changed)
//but if we do not want to change the value of the object we can use Object.freeze() method

// Object.freeze(obj);

obj.age = 40;
console.log(obj); //{ name: 'John', age: 40, city: 'New York' }


//Object methods
//Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.
console.log(Object.keys(obj)); //[ 'name', 'age', 'city' ]
//Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop
console.log(Object.values(obj)); //[ 'John', 40, 'New York' ]
//Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs
console.log(Object.entries(obj)); //[ [ 'name', 'John' ], [ 'age',
// 40 ], [ 'city', 'New York' ] ]

//Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
var obj1 = {
    name: "John",
    age: 30,
    city: "New York"
}
var obj2 = {
    name: "Smith",
    age: 40,
    city: "Chicago"
}
var obj3 = Object.assign({}, obj1, obj2);
console.log(obj3); //{ name: 'Smith', age: 40, city: 'Chicago' }

//Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
var obj4 = Object.create(obj1);
console.log(obj4); //{}  //empty object
console.log(obj4.name); //John

