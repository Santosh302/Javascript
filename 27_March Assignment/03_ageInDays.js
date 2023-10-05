const person ={
   firstName:"Santosh",
   lastName:"yadav",
   age:23,
};

function ageInDays(personObject, callback){
    const fullName = `${personObject.firstName} ${personObject.lastName}`;
    const ageInDays =personObject.age*365;
    callback(fullName, ageInDays);
}

function logResult(fullName, ageInDays){
    console.log(
        `The person's full name is ${fullName} and their age in day is ${ageInDays}.`
    );
}

ageInDays(person , logResult);