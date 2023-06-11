//Store the Daily Wage along with the Total Wage
let totalWorkingDays = 0;
const Is_PartTime = 1;
const Is_FullTime = 2;
const Part_Time_Hours = 4;
const Full_Time_Hours = 8;
const Wage_Per_Hour = 20;
let empHrs = 0;
const Max_Hrs_In_Month = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let empDailyWagerArr = new Array();


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

function calDailyWage(empHrs) {
    return empHrs * Wage_Per_Hour;
}

while (totalEmpHrs <= Max_Hrs_In_Month && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empcheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empcheck);
    totalEmpHrs += empHrs;
    empDailyWagerArr.push(calDailyWage(empHrs));
}
let empWage = calDailyWage(totalEmpHrs);
console.log("Total Days:" + totalWorkingDays + "\nTotal Hrs:" + totalEmpHrs + "\nEmp Wage:" + empWage);