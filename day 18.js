/*Application of Promises
fetch and async and await

A fetch is an alternative to XHR
fetch takes the api as a the parameter
performs necessary operations
Syntax:var variable=fetch("API");

Fetch always returns a Promise
inside the promise we have the data in the readable stream
data has to be converted either to array or Object/String


To convert into object we need to have .json() method 
.json() method always returns a promise 

we need to use one more .then() to access the value inside the promise */
var p1=fetch("https://restcountries.com/v3.1/all");
 console.log("p1"+p1);
 var p2=p1.then((data)=>data.json());
 console.log("p2"+p2);
 p2.then((data1)=>console.log("data"+data1))
var p1=fetch("https://restcountries.com/v3.1/all")
.then((data)=> data.json())
.then((data1)=>console.log(data1));

//Q1.Using rest countries API ,Print the Country Name ,Capital In the HTML file in a simple HTML tag
var p1=fetch("https://restcountries.com/v3.1/all") //it is a promise
.then((data)=> data.json())//again here it is a promise
.then((data1)=>foo(data1));
function foo(data1){
    for(var i=0;i<data1.length;i++){
        var div=document.createElement("div");
        div.innerHTML=`Countryname:${data1[i].name.common} Capital:${data1[i].capital[0]}`;
        document.body.append(div);
    }

}

https://bit.ly/3BiTZ9T
var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
row.className="row";
container.append(row);
var res=fetch("https://restcountries.com/v3.1/all");
res.then((data)=>data.json()).then((data1)=>foo(data1));
function foo(data1){
    console.log(data1);
for(var i=0;i<data1.length;i++){
    row.innerHTML+=`<div class="col-md-4">
    <div class="card border-primary mb-3" style="max-width: 18rem;">
    <img src="${data1[i].flags.svg}" class="card-img-top" alt="...">
    <div class="card-header">${data1[i].name.common}</div>
   <div class="card-body text-primary">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>
</div>`;
document.body.append(container);

}
}