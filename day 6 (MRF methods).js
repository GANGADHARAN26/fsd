//MRF methods
//Problems
//for-each 
//map,reduce,filter
//They are all applicable only to the arrays

var arr=[12,13,14,15];
//var res=[24,26,28,30];
//Step 01:for loop
//Step 02:multiply each element of the array by 2
//Step 03: take a res array and push it 
//Step 04:print the res array

map method:it is applicable to the array
it takes function as a parameter
apply it on each and every element of the array
it returns the new array

var arr=[12,13,14,15];
var res=arr.map((ele)=>ele*2);
console.log(res);


var arr=[12,13,14,15];
//var res=[13,15];
//Step 01:for loop
//Step 02:check the element is not divisible by 2
//Step 03: take a new array an push the result to the array
//Step 04:print the new array


Filter method takes function as a parameter
inside the function we have the condition
it will apply on each and every element of the array
if the element passes the condition it will be pushed to the resultant array
if not it won't be passed to the resultant  array

var arr=[12,13,14,15];
var res=arr.map((ele)=>ele%2!=0);
console.log(res);

//print only the names of those countries whose region Belongs to Asia
 //print only the names of those countries whose region Belongs to Asia
   var asia=res.filter((ele)=>ele.region=="Asia");
   console.log(asia);
   //extract only the names from above the array
   var cnames=asia.map((ele)=>ele.name);
   console.log(cnames);
//Print only those  countries  names whose population is less than 1Lakh

var arr=[32,33,34,35];
//Step 01:for loop
//Step 02:sum=0;
//Step 03:arr[i]+sum;
//Step 04:print sum

//Reduce Function:
//reduce function reduces the array into a single element
//it takes function as a paramater
//inside the function we have 2 parameters
//acc,cv
//acc:accumulator
//cv:current value

//Syntax:var res=arr.reduce((acc,cv)=>{},initial value);
//2 cases are there:
//if initial value acc is not given
//It will store the first index element
var res=arr.reduce((acc,cv)=>acc+cv);
console.log(res);

//Syntax:var res=arr.reduce((acc,cv)=>{},initial value);
//2 cases are there:
//if initial value acc is  given
//It will store the first index element
var res=arr.reduce((acc,cv)=>acc+cv,100);
console.log(res);

var a=10;
var b=20;
//The sum of a and b is 
//30
console.log("The sum of a and b is"+(a+b)+"\n"+"has been added");

//to avoid the concatenation,
//we use template literals ->ES6
//`${expression}`
//expression can be anything
console.log(`The sum of a and b is ${a+b}
has been added`)

//extract the details of the countires whose region belongs to Europe and 
  //print the sum of the total population of the Europe region

var arr=[32,33,34,35];
//for-each 
//it is alternative to the for loop
//it is applicable only for arrays
//it takes function as a parameter
//apply on each and every element of the array
//it is used for printing purpose
arr.forEach((ele)=>console.log(ele));