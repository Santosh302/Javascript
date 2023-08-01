//one parameter and a single return statement
const square=(x)=>x*x;
let m=square(2);
console.log(m);
//Multiple parameter, and a single return expression
const sumOftwoNumbers=(x,y)=>x+y;
let n=sumOftwoNumbers(2,3);
console.log(n);
//Multiple statement in function expression
const sum=(x,y)=>{
    console.log('adding ${x} and ${y}');
    return x+y;
};
//Returning an object
const sumAndDifference=(x,y)=>({sum:x+y,difference:x-y});
let o=sumAndDifference(2,3);
console.log(o);