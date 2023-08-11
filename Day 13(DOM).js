create a form elements using DOM ,with below information
a.firstname
b.middlename
c.lastname
d.email
e.password
//Functional Based Approahes
//Adding the events
//Revise:
//create function for label,input type and br
function labelcreate(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
    }
    
    //line breaker
    function linebreakers(tagname){
    var ele=document.createElement(tagname);
    return ele;
    }
    //input elements
    function inputele(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
    }
var email=labelcreate("label","for","email","Email");
var br1=linebreakers("br");
var emailinput=inputele("input","type","email","id","email");
var br2=linebreakers("br");
document.body.append(email,br1,emailinput,br2);

   <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>

Google Form Link:
https://bit.ly/41dleO6

events:are to perform some specific task
addEventListener()
it is an inbuilt method
it takes 2 parameters
event,functionname
event :
click,keypress,mousemove,mouseover..
var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Click me";
button.addEventListener("click",foo);
document.body.append(button);

function foo(){
    console.log("Hello world!!!");
}


//Functional Based Approahes
//Adding the events
//Revise:
//create function for label,input type and br


//Question 1 and 2 answers
var div=document.createElement("div");
div.innerHTML="this is div";
div.addEventListener("mouseover",bar);
document.body.append(div);


function bar(){
    document.querySelector("div").style.color="red";
}


var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Click me";
button.addEventListener("click",foo);
document.body.append(button);

function foo(){
    var ele=prompt("enter the age");
    var span=document.createElement("span");
    span.style.fontSize="32px";
    span.style.color="green";
    span.innerHTML=ele;
    document.body.append(span);
  
}