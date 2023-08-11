//Objects:
//An Object is a k:v pair structure
//var obj={
//  keyname:value
//};



//here obj is the Object name by which we can access the elements
//of the Objects
var studentname={
  name:"johndoe",
  age:23,
  year:2018
};





//How to access the values inside the Objects:
//2 important types
//. dot Method
//[]Box Method






//. Method
//Syntax:objectname.keyname
console.log(studentname.name);
//Box Method
//Syntax:objectname["keyname"];
console.log(studentname["age"]);
//it is useful while printing the Objects
  var studentname={
  name:"johndoe",
  age:23,
  year:2018
};





//For-in loop
//it is applicable for both arrays and Objects
//it is a Unidirectional  Loop(one way)
//Syntax:for(variable key in object){}
for(var i in studentname){
  //"name",studentname["name"]
console.log(i,studentname[i]);
}


//Uses of for-in :Objects,JSON,arrays
//for loop:strings,arrays..set of numbers
//A new Key:value pair has to be added
//Syntax:objectname.keyname=value;
//gender:male
studentname.gender="male";
console.log(studentname);
//Insertion,updation,deletion
studentname.attendance=["mon","tue","wed"];
for(var i=0;i<studentname.attendance.length;i++){
  console.log(studentname.attendance[i]);
}


//Updation as well as deletion
//Syntax:objectname.keyname=value
studentname.age=24;
console.log(studentname);
//deletion
//Syntax:delete objectname.keyname
delete studentname.gender;
console.log(studentname);

//Create a Object of Employee which consist of followinf information
//name,age,salary,accountnumber
//1.update the name of the employee by "tom"
//2.delete the salary of the employee
//print both the key name as well as the value stored after the deletion
//JSON:javascript Object Notation
//API:
//Application Programming Interface

//Obj
var obj={
  name:"john",
  age:23
};

//JSON
var obj1={
  "name":"john",
  "age":"23"
};
//Array of JSON
//Object
var arr=[{"name":"guvi","age":"23"},{"name":"geek","age":"24"}];
//Syntax:arrayname[indexnumber].keyname
// console.log(arr[0].name);
for(var i=0;i<arr.length;i++){
console.log(arr[i].name,arr[i].age);
}
var arr=[
  {
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum"
  },
  {
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\n"
  },
  {
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\n"
  },
  {
    "id": 6,
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\n"
  }];