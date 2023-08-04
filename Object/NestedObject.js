 const person = {
    fname:"John",
    lname:"Doe",
    age:'25',
    person1:{
        fname:"santosh",
        lname:"yadav",
        age:'23',
    }
  }; 
  console.log(person);
  console.log(person.person1.fname);
  //Nested array and Object....
  const myobj={
    name:"john",
    age:30,
    cars:[
        {name:"ford",models:["fiesta","focus","Mustang"]},
        {name:"BMW", models:["320","x3","x5"]},
        {name:"fiat",models:["500","Panda"]}
    ]
  }
  console.log(myobj);