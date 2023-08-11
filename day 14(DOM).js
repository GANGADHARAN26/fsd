var table=document.createElement("table");
table.setAttribute("class","table");

var thead=document.createElement("thead");
var trhead=document.createElement("tr");

var th1=document.createElement("th");
th1.setAttribute("scope","col");
th1.innerHTML="First";

var th2=document.createElement("th");
th2.setAttribute("scope","col");
th2.innerHTML="Second";

trhead.append(th1,th2);
thead.append(trhead);

var tbody=document.createElement("tbody");
var trbody=document.createElement("tr");
var td1=createtrtd("td","Mark");
var td2=createtrtd("td","otto");
trbody.append(td1,td2);
tbody.append(trbody);

table.append(thead,tbody);
document.body.append(table);







function createtrtd(tagname,content){
let ele=document.createElement(tagname);
ele.innerHTML=content;
return ele;
}

Write a Javascript code for character counts in the textarea.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <textarea name="" id="" cols="30" rows="10"></textarea>
<script src="script.js"></script>
</body>
</html>
let res=document.querySelector("textarea").addEventListener("keyup",(event)=>console.log(event.target.textLength));
    console.log(res);

var p=document.createElement("div");
var c1=document.createElement("p");
var c2=document.createElement("p");
var res=p.append(c1,c2);
console.log(res);
document.body.append(p);
//append can append mulitple elements
//it returns undefined

//appendChild can append only single element
//it returns the appended element
//append vs appendChild
var p=document.createElement("div");
var c1=document.createElement("p");
c1.innerHTML="this is c1";
var c2=document.createElement("p");
c2.innerHTML="this is c2";
var res=p.append(c1,c2);
console.log(res);
document.body.append(p);
//append can append mulitple elements
//it returns undefined

//appendChild can append only single element
//it returns the appended element