function sayMayName(){
    console.log("S")
    console.log("A")
    console.log("N")
    console.log("T")
    console.log("O")
    console.log("H")
}
//sayMayName()
/* function addTwoNumber(number1, number2){
    console.log(number1+ number2);
}
const result =addTwoNumber(2,3);
console.log(result); */

function addTwoNumbers(number1 ,number2){
    //let result = number1 +number2
    //return result;
     return number1+ number2
}
const result =addTwoNumbers(3,6);
//console.log("Result", result);

function loginUserMessage(username= "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`

}

//console.log(loginUserMessage("santosh"))
//console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
//console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username:"Santosh",
    prices:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username:"sam",
    price:399
})
const myNewArray =[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,500,1000]));