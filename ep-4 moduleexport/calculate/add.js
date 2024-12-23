//modules protect their variables and function from leaking into the global scope
console.log("Hello from script3.js");
const calculatesum=(a,b)=>{
    console.log(a+b);
}
module.exports={calculatesum};