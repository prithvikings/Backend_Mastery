//modules protect their variables and function from leaking into the global scope
console.log("Hello from script3.js");
var x="Hello by making object";
const calculatesum=(a,b)=>{
    console.log(a+b);
}
module.exports={
    x:x,
    calculatesum:calculatesum};