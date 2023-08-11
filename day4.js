//Functions and Their Types
//Some Problems

//Functions are required to perform some specific task
//Syntax:function functionname(){return };
//Need of return keyword: the result of any function must take  the result outside of it
//Application of function:code reusability
//pass an Array to a function 
//if return keyword is missing inside the function and If  you call a function from console log
//it will return undefined
var arr=[12,13,14,15];
var res=[];
function even(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
           res.push(arr[i]);
        }
    }
return res;
    
}
console.log(even(arr));
1.Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

Input:(foo([7, 9, 0, -2]))
output:7

Input:(foo([0,6,4,5]))
output:0

Input:(foo([1,2,3,4],-3))
Output:[];

Input:(foo([1,2,3,4],3))
Output:[1,2,3]

Input:(foo([1,2,3,4],5))women 
Output:[1,2,3,4]
function foo(arr,n){
if(n==undefined){
return arr[0];
}
if(n<0){
return [];
}
return arr.slice(0,n);
  
  2.Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
Input :                                     	Expected Output :
console.log(last([7, 9, 0, -2]));         -2
console.log(last([7, 9, 0, -2],3));    [9, 0, -2]
console.log(last([7, 9, 0, -2],6));    [7, 9, 0, -2] 
}
function last(arr,n){
if(n==undefined){
return arr[arr.length-1];
}
return arr.slice(-n);
}
//anonymous functions
//var variablename=function(){
//return 
//}
//usage:on the real time events
var res=function(){
return "hello world";
}
console.log(res());
//anonymous functions
//var variablename=function(){
//return 
//}
//usage:on the real time events
var res=function(){
return "hello world";
}
console.log(res());
//Latest version of Javascript ES6
//Arrow functions:
//they are used to reduce the function length
//if the function is of type single  line statement then no need of return keywprd
//if the functions are having, multiple lines of statements then need of return kwyord
//Syntax:var variablename=()=>();
var res=(a,b)=>{
var result=10;
return "hello world";
  };
console.log(res(12,13));
//IIFE:
//Immeadiatley Invoked function Execution
//()()
//no return keyword
//Use case:consumption of memory is less
(function foo(){
console.log("hello world");  
})();


// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
//Function Definition

function foo(a,b){
    return a*b;
}
var a=parseInt(userInput[0]);
var b=parseInt(userInput[1]);

console.log(foo(a,b));


});
