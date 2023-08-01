//a function that have not  name is called as anonymous functions.
let a=function (a,b){
    return a+b;
}
let c=a(4,5);
console.log(c);
//Immediately Invoked function Execution

(function (f,g){
    console.log(f+g);
})(4,7)
