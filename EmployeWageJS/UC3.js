//Refactor the Code to write a function to get work hours

const Is_Absent = 0;
const Is_PartTime = 1;
const Is_FullTime = 2;
const Part_Time_Hours = 4;
const Full_Time_Hours = 8;
const Wage_Per_Hour = 20;
let empHrs = 0;

let empcheck = Math.floor(Math.random() * 10) % 2;

if (empcheck == Is_Absent) {
    console.log("Employee is absent");
} else {
    console.log("Employee is present");
}

empHrs = getWorkingHours(empcheck);
let empWage = empHrs * Wage_Per_Hour;

function getWorkingHours(empcheck) {
    switch (empcheck) {
        case Is_PartTime:
            return Part_Time_Hours;
        case Is_FullTime:
            return Full_Time_Hours;
        default:
            return 0;
    }
}
console.log("Emp Wage:" + empWage);