//Fundamentals of javascript:
//arrays and objects 
// function return 
// async js coding

//-----------------Asynchronous js coding----------------
//Asynchronous js coding is a way of coding where the code is executed in a non-blocking way.

//Line by line code chale isey kahte hai synchoronous code

// Jo bhi code async nature ka ho, usey side stack mein bhej do and agle code chalao jo bho sunc nature ka ho, jab bho sara sync code chal jaaye tab check karo ki async code complete hua ya nahi and agar wo complete hua ho to usey main stack mein lao and chalao.

//Example of async code:
setTimeout(() => {
    console.log('This is async code');
}, 2000);
console.log('This is sync code');


async function asyncFunction() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise;
    console.log(result);
}
asyncFunction();
console.log('This is sync code');
