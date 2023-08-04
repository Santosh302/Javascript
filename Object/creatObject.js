//A javascript object is collection of named values. NOTE named value called properties and method.

//Create Object
const person={
    firstName:"John",lastName:"Doe",
    age:50,eyeColor:"blue"
};
console.log(person);
//Another way to create a object
const person1={}
person1.firstname="john";
person1.lastname="Doe";
person1.age=40;
person1.eyecolor="blue";
console.log(person1);
//2 method to creat object
const person2=new Object();
person2.firstname="Santosh";
person2.lastname="Yadav";
person2.age=23;
person2.eyecolor="black";
console.log(person2);
//change the value
const x=person2;
x.age=24;
console.log(person2)
//Accessing JavaScript Properties
/* 
objectName.property //person.age
or
objectName["property"] //person["age"]
or 
objectName[expression] //x="age"; person[x]
The expression must evalute to a property name.
*/




