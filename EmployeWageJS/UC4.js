//Calculating Wages for a Month assuming 20 Working Days in a Month

const Is_PartTime = 1;
const Is_FullTime = 2;
const Part_Time_Hours = 4;
const Full_Time_Hours = 8;
const Wage_Per_Hour = 20;
let empHrs = 0;
const NUM_OF_WORKING_DAYS = 20;

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

for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}

let empWage = empHrs * Wage_Per_Hour;
console.log("Total Employee Hours = " + empHrs + " Total Employee Wage = " + empWage)



