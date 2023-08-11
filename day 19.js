// Async and Await 
// it is the syntactic sugar way of writing the promises
// it is applicable to function
// A normal function can be converted into async function using the keyword async

// An async function always returns a promise
// Await: it is used inside async function
// it is replacement to .then()

// async function bar(){
// let res=await fetch("https://restcountries.com/v3.1/all");
// let res1= await res.json();
// console.log(res1);
// }
// bar();

// To handle failures here we have try-catch
// error handling statements
// function foo(){
//   return new Promise((resolve,reject)=>reject("this is rejected!!"));
// }
// function add(){
//   return new Promise((resolve,reject)=>resolve("this is resolved!!"));
// }

// async function bar(){
//   try {
//     let res=await foo();
//     console.log(res);
//     let res1=await add();
//     console.log(res1);
   
//   } catch (error) {
//     console.log(error);
//   }
// }
// bar();
// //Async and await
// https://api.chucknorris.io/jokes/random

// var h1=document.createElement("h1");
// h1.innerHTML="Covid 19 Tracker";
// h1.style.textAlign="center";
// h1.style.marginTop="50px";
// document.body.append(h1);

// var div=document.createElement("div");
// div.style.textAlign="center";
// var input=document.createElement("input");
// input.setAttribute("type","text");
// input.setAttribute("id","country");
// input.style.width="30%";
// input.setAttribute("placeholder","Enter the countryname");

// var linebreak=document.createElement("br");
// var button=document.createElement("button");
// button.setAttribute("type","button");
// button.classList.add("btn","btn-primary");
// button.style.margin="10px";
// button.innerHTML="Search";
// button.addEventListener("click",foo);


// div.append(input,linebreak,button);
// document.body.append(div);

// async function foo(){
//   let res=document.getElementById("country").value;
//   console.log(res);
//   let url=`https://api.covid19api.com/dayone/country/${res}`;
//   let res1 =await fetch(url);
//   let res2= await res1.json();
//   console.log(res2);
//   var index=res2.length-1;
//   console.log(res2[index].Active);
// }