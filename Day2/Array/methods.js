/* 
i)   Array length
ii)  Array toString()
iii) Array pop()
iv)  Array push()
v)   Array shift()
vi)  Array unshift()
vii) Array join()
viii Array delete()
ix)  Array concat()
x)   Array flat()
xi)  Array splice()
xii) Array slice()
*/
 const fruits=["Banana","Orange","Apple","Mango"];
 let size=fruits.length;
 console.log(size);

 /* Push and Pop the element in Array */
 fruits.pop();
 console.log(fruits);
 let fruit=fruits.pop();
 console.log(fruits);
 fruits.push("Kiwi");
 let length=fruits.push("Mango");
 console.log(fruits);

 /* Shift() method in Array */
 fruits.shift();
 console.log(fruits);
 const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
 let fru = fruit1.shift();
 console.log(fru);

 /* Unshifted function in JavaScript */

 const fruit2 = ["Banana", "Orange", "Apple", "Mango"];
 fruit2.unshift("Lemon");
 console.log(fruit2);
 let a=fruit2.unshift();
 console.log(a);

 /* Changing Element */
 fruit2[0]="apple";
 console.log(fruit2);

 /* JavaScript Array delete()
Warning !
Array elements can be deleted using the JavaScript operator delete.
Using delete leaves undefined holes in the array.
Use pop() or shift() instead. */

delete fruit2[0];
console.log(fruit2);

/* Mergning(Concatenating) Arrays */

const myGirls = ["Cecilie", "Lone"];
const myBoys=["Emil","Tobias", "Linus"];
const myChildren= myGirls.concat(myBoys);
console.log(myChildren);

let z=["apple","Mango"];
let y=["Onin","Orange"];
let x=["a","b","c"];
let w=z.concat(y,x);
console.log(w);
let v=x.concat("d");
console.log(v);

/* Splicing and Slicing Arrays
The splice() method adds new items to an array.
The slice() method slices out a piece of an array. */
fruits.splice(2,0,"Lemon","Kiwi");
console.log(fruits);
const u = ["Banana", "Orange", "Apple", "Mango"];
u.splice(2, 2, "Lemon", "Kiei");
console.log(u);
u.splice(0,1);
console.log(u);
/* Slice */
 const citrus= u.slice(1);
 console.log(citrus);
 const u1 = ["Banana", "Orange", "Apple", "Mango"];
 const citru=u1.slice(1,3);
 console.log(citru);