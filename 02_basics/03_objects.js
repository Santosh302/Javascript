//singleton 
//Object.create
//Object.literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Santosh",
    "full name":"Santosh kumar yadav",
    [mySym]:"mykey1",
    age:18,
    location:"Bhadohi",
    email:"santosh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

//console.log(JsUser.email);
//console.log(JsUser["email"])
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);

JsUser.email = "santosh@amazonn.com"
//Object.freeze(JsUser)
JsUser.email = "santosh@chatgpt.com";
//console.log(JsUser);

JsUser.greeting =function(){
    console.log("Hello JavaScript Users");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
