//Fundamentals of javascript:
//arrays and objects 
// function return 
// async js coding

//foreach map filter find indexof

//foreach
var arr=[1,2,3,4,5,6,7,8,9,10];
arr.forEach((elem)=>{
    console.log(elem+1);
})

//map
//map dekhte hi dimaag mein ek naya array bana lo same number ka aur usmein kuch changes kar do aur usko return kar do phir usko store kar do ek naye variable mein then console print kar do 

//foreach vs map
//foreach is used to iterate over the array and do some operation on each element of the array but it does not return anything but map is used to iterate over the array and do some operation on each element of the array and it returns a new array with the changes made in the original array elements.
var newarr=arr.map((elem)=>{
    return 13;
})
console.log(newarr);


//filter
//filter is used to filter out the elements from the array based on some condition and return the new array with the elements which satisfy the condition 
var filterarr=arr.filter((elem)=>{
    return elem>5;
})
console.log(filterarr);

//find
//find is used to find the first element which satisfy the condition and return that element 
var findarr=arr.find((elem)=>{
    return elem>5;
})
console.log(findarr);

//indexof
//indexof is used to find the index of the element in the array 
var indexarr=arr.indexOf(5);
console.log(indexarr);