//Calculate Wages till a condition of total working hours of 160 or max days of 20 is reached for a month

const Max_Hrs_In_Month = 100;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
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

while (totalEmpHrs <= Max_Hrs_In_Month && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
let empWage = totalEmpHrs * Wage_Per_Hour;
console.log("Total Days:" + totalWorkingDays + "\nTotal Hrs:" + totalEmpHrs + "\nEmp Wage:" + empWage);