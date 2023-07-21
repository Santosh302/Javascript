// First way two create Object
// Creating a object by using object Literal..
let car1={
    name:'Honda City',
    Manufactoring:'Honda',
    fuelCapacity:'40L',
    isAutomatic:false,
    greetMe:function(){
        console.log("Hello from Santosh kumar yadav -- PW Skills");
    }

}
// console.log(car1.greetMe());
let car2={
    Name:'Sonet',
    Manufacture:'Kia',
    fuelCapacity:'45L'
}
// console.log(car1);
// console.log(car2);
// console.log(car1.name);
// console.log(car2.Name,car2.Manufacture);
// console.log(car1['name']);
// car1.color='red';
// car2.Name='BMW';
// console.log(car1);
// console.log(car2);


// Second way to create object..
// Object using new keyword..

var myDetails=new Object();
myDetails.name="Santosh kumar yadav";
myDetails.title="Engineer at Microsoft|Google|facebook|Infosys";
myDetails.expertise=['fronted','interview','javascript','Web Development'];
myDetails.follower=15000;
myDetails.greetMe=function(){
    console.log("Hello from Santosh kumar yadav -- PW Skills");
}
// console.log(myDetails);
// console.log(myDetails.greetMe());


// 3 way to create method..
// By using an Object constructor..

function Course( 
    instructor,
    title,
    description,
    language,
    duration,
    fees,
    startDate,
    youTubeLink
)
{
    this.instructor=instructor;
    this.title=title;
    this.description=description;
    this.language=language;
    this.duration=duration;
    this.fees=fees;
    this.startDate=startDate;
    this.youTubeLink=youTubeLink;

}
var JavaScriptCourse=new Course(
    "chirag Goel",
    "javascript foundation",
    "javaScript programming course",
    "Hinglish",
    10,
    'free',
    '5 April 2023',
   ' https://www.youtube.com/watch?v=JH8oz8Snaz8&list=PLxgZQoSe9cg1B3TiBz05FMwfdwCkkpy2c&index=8'

);
// delete JavaScriptCourse.description;
// JavaScriptCourse.title=null;
console.log(JavaScriptCourse);

// Object method......................


// console.log(Object.keys(JavaScriptCourse));
// console.log(Object.values(JavaScriptCourse));
JavaScriptCourse.instrutorCompany="Google";
//  Object.freeze(JavaScriptCourse);
// JavaScriptCourse.instructor="lafjdls";
// Object.seal(JavaScriptCourse);
// JavaScriptCourse.duration=15;
// console.log(JavaScriptCourse);
for(var key in JavaScriptCourse){
    console.log(JavaScriptCourse[key]);
}