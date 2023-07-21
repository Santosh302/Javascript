const day="Tuesday";
let dayUntilWeekend;
switch(day){
    case "Monday":
     console.log(`There are 5 day(s) until the weekend.`);
    break;
    case "Tuesday":
        console.log(`There are 4 day(s) until the weekend.`);
    break;
    case "Wednesday":
        console.log(`There are 3 day(s) until the weekend.`);
    break;
    case "Thursday":
        console.log(`There are 2 day(s) until the weekend.`);
    break;
    case "Friday":
        console.log(`There are 1 day(s) until the weekend.`);
    break;
    case "Saturday":
        console.log(`There are 0 day(s) until the weekend.`);
    break;
    deafult:
    daysUntilWeekend="Invalid Day";
    break;
}
