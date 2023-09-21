const name ="Santosh"
const repoCount =50
//console.log(name +repoCount +" Value")
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Santosh-hc-com');

/* console.log(gameName[0]); //S
console.log(gameName.toUpperCase()); //SANTOSH-HC-COM
 */

console.log(gameName.charAt(2));//n
console.log(gameName.indexOf('t'));//3

const newString =gameName.substring(0, 4);
console.log(newString);// Sant

const anotherString =gameName.slice(-8 ,4)
console.log(anotherString);

const newStringOne = "    Santosh    "
console.log(newStringOne);
console.log(newStringOne.trim());//trim that mean you will not find any type of space as like name declaration above
 
const url = "https://hitesh.com/hitesh%20choudhary" ;

 console.log(url.replace('%20' , '_'))

 console.log(url.includes('sunder')) //false

 console.log(gameName.split('_'));
