function sum( a, b=10){
    return a+b;

} let result=sum(2);
console.log(result);
//function with unlimited number of parameter

function sumOfAllParameter(){
    let sum=0;
    for(var i=0; i<arguments.length; i++)sum+=arguments[i];
    return sum;
}
//function call
let result1=sumOfAllParameter(1,2,3,4,5,6,7,8,9);
console.log(result1);
