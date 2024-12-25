require('./script2.js');
 //one module to another module
const {calculatesum,multiply,subtract}=require('./calculate');
const data=require('./data.json');
var name="Pritv=esh";
var a=10;
var b=20;
calculatesum(a,b);
multiply(a,b);
subtract(a,b);
console.log(name);
console.log(data.address);



