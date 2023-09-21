let score = "Santosh"

//console.log(typeof score); //string
//console.log(typeof(score)); //string

let valueInNumber = Number(score)
//console.log(typeof valueInNumber); //number
//console.log(valueInNumber); //NaN

let isLoggedIn = "Santosh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn); //true

//1 =>true; 0 => false
// " " => false
//"Santosh" => true

let someNumber = 33;
let stringNumber =String(someNumber) ;
//console.log(stringNumber); //33
//console.log(typeof stringNumber); //string

//----------------Operations -------------------

let value =3;
let negValue = -value;
//console.log(negValue); // -3

/* console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);
 */

let str1 ="hello";
let str2 = "Santosh"

let str3 = str1+ str2
//console.log(str3);

/* console.log("1" +2); //12
console.log(1+"2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); //32

console.log((3+4)*5%3);  //2

console.log(+true);  //1
console.log(+"");  //0 */

let num1 ,num2, num3
num1= num2= num3 = 2+2;

//console.log(num1); //4

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

//link to study:-

//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

/* implicit type conversion:
When you add a string and a number, JavaScript will automatically convert the string to a number before performing the addition.
When you compare two values of different types, JavaScript will automatically convert one value to the type of the other value.
When you pass a value to a function that expects a specific type, JavaScript will automatically convert the value to the expected type before passing it to the function.
 */

/* explicit type conversion:
To convert a string to a number, you can use the Number() function.
To convert a number to a string, you can use the String() function.
To convert a value to a boolean, you can use the Boolean() function. */