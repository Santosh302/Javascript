//Dates

let myDate = new Date();

/* console.log(myDate.toString());  //Thu Sep 21 2023 08:15:31 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//Thu Sep 21 2023
console.log(myDate.toLocaleString()); //9/21/2023, 8:15:31 AM
console.log(typeof myDate); //object */

let myCreateDate = new Date("01-14-2023")
//console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
/* 
now() method is used to return the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC. Since now() is a static method of Date, it will always be used as Date.now().
*/
/* console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000)); */

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getDate());

//`${newDate.getDay()} and the time`

 let s =newDate.toLocaleDateString('dafault', {
    weekday: "long",
})
console.log(s);
