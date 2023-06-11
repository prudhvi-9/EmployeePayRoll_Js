//Store the Day and the Daily Wage along with the Total Wage

const Is_PartTime = 1;
const Is_FullTime = 2;
const Part_Time_Hours = 4;
const Full_Time_Hours = 8;
const Wage_Per_Hour = 20;

let empHrs = 0;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
const Max_Hrs_In_Month = 160;
const NUM_OF_WORKING_DAYS = 20;

let empDailyWagerArr = new Array();
let empDailyWagerMap = new Map();

function calDailyWage(empHrs) {
    return empHrs * Wage_Per_Hour;
}


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
    let empcheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empcheck);
    totalEmpHrs += empHrs;
    empDailyWagerArr.push(calDailyWage(empHrs));
    empDailyWagerMap.set(totalWorkingDays, calDailyWage(empHrs));

}
console.log(empDailyWagerMap);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;

}
console.log("Employee Wage Map total Hrs:" + Array.from(empDailyWagerMap.values()).reduce(totalWages, 0));