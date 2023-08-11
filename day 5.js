//Pillars of Java _~javascript
//Pillars of OOP
//Encapsulation,Inheritance,Polymorhism
//Classes and Objects
//A common Template
//Class:It is a collections of properties,Objects,and Methods
//class always start from the keyword called class
//class classname{
    
//}
class Car{
    constructor(color,brand){
        this.color=color;
        this.brand=brand;
    }
}
//Object: this is a real time entity
//This will be a specific Objects
//Syntax: var varibalename=new Classname();
//new is an Inbuilt Keyword which will create the Object
//On every time whenver it has been declared
var c1=new Car();

//To insert the values inside the Object we need constructor
//Constructors are the special way of assigning values to objects

//this is a temproray Keyword which is pointing to freshly created objects
class Car{
    constructor(color,brand){
        //we have to diffenciate between key and value
        this.color=color;
        this.brand=brand;
    }
}
//Methods: is similar to functions in classes and Objects
class Car{
    constructor(color,brand){
        //we have to diffenciate between key and value
        this.color=color;
        this.brand=brand;
    }
    //here method name is userdefined
     printnames(){
         return this.brand;
     }
    
}
var c1=new Car("green","BMW");
console.log(c1.printnames());
//Methods: is similar to functions in classes and Objects
class Car{
    constructor(color,brand){
        //we have to diffenciate between key and value
        this.color=color;
        this.brand=brand;
    }
    //here method name is userdefined
     printnames(s){
         return s+"have a car of"+this.brand;
     }
    
}
var c1=new Car("green","BMW");
console.log(c1.printnames("guvi"));

1.Create a Class of Type OLA that consist of following as  a parameters
a.carname
b.no of kms
for each km it charges 15 rs 
Create A method which will calculate the  rate for the numbers of KM that a car has travelled
//ES5 vs ES6 
//spread,rest parameters
//... is called a spread Operator
//1st Application:Expanding the arrays
var arr=["guvi","geek","hello","world",32];
//Expanding the arrays
console.log(...arr);

//2nd:character arrays 
let str="hello";
let char=[...str];
console.log(char);

//Combining The arrays
var arr1=[12,13,14,15];
var arr2=[15,16,17,18,19];
//var arr3=[];
var arr3=[...arr1,...arr2];
console.log(arr3);
function foo(a,b,...res){
    console.log(res);
    return a+b;
}
console.log(foo(12,13,14,15,16,17,18));
//if I wanted to consider remaining paramaters also

//rest parameters
//it  is applicable only to functions
//it will consider the remaining parameters
//...restparamatername
//The return type of rest parameters is an array

1.Write a function in which it has to  sum the elements that has beenn passed as a parameter to the function

function foo(){
}
console.log(foo(1)); -> 1
console.log(foo(12,13))->25
console.log(foo(12,14,15,16))->57
console.log(foo(1234,5421))-> sum 

function foo(...res){
    var sum=0;
    for(var i=0;i<res.length;i++){
        sum=sum+res[i];
    }
    return sum;
}
console.log(foo(12));
//if I wanted to consider remaining paramaters also

//rest parameters
//it  is applicable only to functions
//it will consider the remaining parameters
//...restparamatername

