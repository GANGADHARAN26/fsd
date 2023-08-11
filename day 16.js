/*
Module 04:
callback
promises
fetch
async and await

Synchronous:Sequential

Asynchronous:Parallel/Time consuming
*/
setTimeout(()=>{},time in milliseconds);

console.log("App is starting....");
setTimeout(()=>{
    console.log("App is under Construction....");
},3000);
setTimeout(()=>{
    console.log("App is under Prod...");
},2000);

/*

Callstack: it is the register which is used to keep the track of
the execution of the functions/statements

Web api:It is the place where the actual Time consuming operations takes place

call back queue: where async code waist for the execution
it is place where all the operations that are to be executed
via call stack will be place 
it will be placed in the FIFO order

Event Loop:
It is to check whether the call stack is empty or not
if it is empty it will push the code from the event queue to call stack for the execution
*/

var sayhi=()=>{
    saybye();
    console.log("Hello guvi!!");
}
var saybye=()=>{
    console.log("Bye!! have a great day!!");
}

sayhi();


console.log("App is under starting..")
setTimeout(function timer() {
    console.log('App is under construction..');    
}, 2000);

console.log("App is under deployment");

setTimeout(function timeout() {
console.log("App is under testing");
}, 5000);

setTimeout(function bye() {
    console.log('App is under construction..this is for bye');    
}, 3000);

console.log("Welcome to App.");
/*
Callback:
when a  function is passed as a parameter to another function,
the function which is passed as a parameter is nothing
but called as a callback function


Because of the call back hell scenario,call backs are used for the
simple operations and not for the complex operations

Q1.for the array =[1,2,3,4,3,3,3,3,3,4,4,4,5,5,5] find the most frequent item of an array
Output :3
*/
var arr=[1,2,3,4,3,3,3,3,3,4,4,4,5,5,5]
var obj={}
var maxele=arr[0];
var count=1;
var item;
//before checking ,access the array element first
for(var i=0;i<arr.length;i++){
var ele=arr[i];
if(obj[ele]){
obj[ele]++;

}
else{
  obj[ele]=1;
}
if(obj[ele]>count){
count=obj[ele];
item=ele;
}
}
console.log(item);