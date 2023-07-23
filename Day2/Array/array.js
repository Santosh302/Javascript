/* Creating an Arrry
 let array_name=[item1,item2, ....];
*/
const cars=["Santosh","Volvo","BMW"];
console.log(cars);
/* Accessing an element of an array */
const car=cars[0];
console.log(car);
/* Changing an Array Element*/
cars[0]="audi";
console.log(cars);
 
/* Second method make an array 

const car = [];
car[0]="Santosh";
car[1]="Valvo";
car[2]="BMW";
console.log(car);

*/

/* Using new keyword to make an array */

const Vehicle = new Array("Saab","Volvo","BMW");
console.log(Vehicle);

const person={firstname:"john",lastname:"Doe",age:46};
const perso= person.firstname;
console.log(perso);

/* length Perporties of Array */
const fruits=["Banana","Orange","Apple","Mango"];
let lengh=fruits.length;
console.log(lengh);

/* Accessing the first element of an array */
let a=fruits[0];
console.log(a);
/* Accessing the last element of an array */
let b=fruits[fruits.length-1]
console.log(b);

/* Adding new element in array */
fruits.push("Lemon");
console.log(fruits);

fruits[fruits.length]="Guava";
console.log(fruits);

/* Adding element with high indexes can create undefined "holes" in an array 
fruits[9]="Lemon";
console.log(fruits);*/

/* WARNING !!
If you use named indexes, JavaScript will redefine the array to an object.
After that, some array methods and properties will produce incorrect results.
Notes:-Arrays are a special kind of objects, with numbered indexes. */

/* A common error
 const points=[40];
 is not the same as:
 const points=new Array(40);
*/
/* Creating an array with one element */
const points=[40];
console.log(points);

/* Creating an array with 40 undefined elements: 
const point =new array(40);
console.log(point); */
let type =typeof fruits;
console.log(type);
console.log(Array.isArray(fruits));
fruits instanceof Array;
