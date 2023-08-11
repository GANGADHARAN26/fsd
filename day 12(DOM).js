// 1.use a method called create Element
var division=document.createElement("div");
// console.log(division);
//<div></div>
//here in above statements the elements are in double  quotes
//2.addding the content inside the html tag
//innerHTML is a property to add the contents for the above method
division.innerHTML="this is div";
//<div>this is div </div>
//3.add the created elements dynamically for the webpage
document.body.append(division);

//Adding attributes to the HTML elements
var div=document.createElement("div");
div.innerHTML="this is div";
//adding inline css to the above element
// div.style.backgroundColor="green";
// div.style.textAlign="center";
//adding the Attribute
//<div class="main">this is div</div>
div.setAttribute("class","main");
var division=document.createElement("div");
division.innerHTML="this is another division";
division.setAttribute("class","main1");
//Append can take multiple values
document.body.append(div,division);

//Nesting elements
var parent=document.createElement("div");
var child=document.createElement("div");
child.innerHTML="this is child";
parent.append(child);
document.body.append(parent);

DOM inbuilt methods:
already the element are defined in the HTML
if you want to perform some modification
then we need above methods

1.document.getElementById()
2.document.getElementsByClassname()
3,document.getElementsByTagname()
4.document.querySelector()
5.document.querySelectorAll();

document.getElementById():it is applicable for the individual id attribute
it takes the id as the attribute
returns the particular HTML element

returns null if id doesn't exists in document
function foo(){
    var res=document.getElementById("mail").value;
    console.log(res);
}
//Assignment:
Create a HTML form and Extract the below details in the console
1.firstname
2.middlename
3.lastname
4.email

above details must be displayed in console on a user clicks a button
