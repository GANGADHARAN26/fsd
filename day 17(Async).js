/*
Promises:
states
handling the Promises
chaning
set of Promises

Need:to overcome call back hell scenario
Promises:wrap the async operations

Promise: It is an object which holds the results of async operations
Syntax: var variable=new Promise(()=>{})
it consist of a object in which holds the function as a parameter
inside the function we have 2 parameters
States:
pending state
fulfilled state
rejected state

resolve:it is for fulfilled state
reject : it is for rejected state
*/
var age=parseInt(prompt("Enter the age"));
var p1=new Promise((resolve,reject)=>{
   if(age>=18){
    resolve("You are eligible to vote");
   }
   else{
    reject("you are not eligible to vote");
   }
   
});
console.log(p1);
/*
resolve:it is for fulfilled state
reject : it is for rejected state

Accessing the content inside the Promise/Handling the Promise
.then(): for resolved state
.catch(): for rejected state
*/
var p1=new Promise((resolve,reject)=>{
    resolve("this is resolved")
    reject("this is rejected");
});
console.log(p1);
p1.then((data)=>console.log(data)).catch((error)=>console.log(error))
//function returning the promise
function foo(){
    return new Promise((resolve,reject)=>reject("this is a foo inside resolve"));
}
foo().then((data)=>console.log(data)).catch((error)=>console.log(error));


function foo(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("this is resolved for foo"),3000);
    });
}
foo().then((data)=>console.log(data)).catch((error)=>console.log(error));


//Dependent operations
function bar(num){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>resolve(5*num),3000);  
    })
}
bar(5).then((data)=>{
    console.log(data);//output:25
    return bar(data); //bar(25) -> returns a promise
}).then((data1)=>{
    console.log(data1); //output :125
    return bar(data1); //bar(125)
}).then((data2)=>console.log(data2))
.catch((error)=>console.log(error));
/*
Promise.all():
it takes the array of promises and waits untill all the promises are resolved
syntax:Promise.all([array of promises])
The result will be array with resolved states
*/
var p1=new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>resolve("this is p1 resolved"),1000);
    }
    else{
        setTimeout(()=>reject("this is p1 rejected"),3000);
    }
});
var p2=new Promise((resolve,reject)=>{
    if(false){
        setTimeout(()=>resolve("this is p2 resolved"),2000);
    }
    else{
        setTimeout(()=>reject("this is p2 rejected"),3000);
    }
});
var p3=new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>resolve("this is p3 resolved"),5000);
    }
    else{
        setTimeout(()=>reject("this is p3 rejected"),3000);
    }
});

Promise.all([p2,p3,p1]).then((data)=>console.log(data)).catch((error)=>console.log(error));

//Promise.allSetteled():
//it takes the array of promises and waits untill all the promises are resolved
//The result will be array of objects with resolved states as well as rejected state
var p1=new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>resolve("this is p1 resolved"),1000);
    }
    else{
        setTimeout(()=>reject("this is p1 rejected"),3000);
    }
});
var p2=new Promise((resolve,reject)=>{
    if(false){
        setTimeout(()=>resolve("this is p2 resolved"),2000);
    }
    else{
        setTimeout(()=>reject("this is p2 rejected"),3000);
    }
});
var p3=new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>resolve("this is p3 resolved"),5000);
    }
    else{
        setTimeout(()=>reject("this is p3 rejected"),3000);
    }
});

Promise.allSettled([p2,p3,p1]).then((data)=>console.log(data)).catch((error)=>console.log(error));