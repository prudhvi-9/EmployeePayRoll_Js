//Ability to Calculate Daily Employee Wage based on part time or full time work.
const Is_PartTime = 1;
const Is_FullTime = 2;
const Part_Time_Hours = 4;
const Full_Time_Hours = 8;
const Wage_Per_Hour = 20;

let empHrs = 0;
empcheck = Math.floor(Math.random() * 10) % 3;
switch (empcheck) {
    case Is_PartTime:
        empHrs = Part_Time_Hours;
        break;
    case Is_FullTime:
        empHrs = Full_Time_Hours;
        break;
    default:
        empHrs = 0;

}
let empWage = empHrs * Wage_Per_Hour;
console.log("Emp Wage:" + empWage);