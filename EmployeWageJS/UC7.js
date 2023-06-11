//Use the Daily Wage Array perform following operations using Array Helper Functions
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

//Calc total Wage using Array forEach or reduce method
let totempWage = 0;
function sum(dailyWage) {
    totempWage += dailyWage;
}
empDailyWagerArr.forEach(sum);
console.log("Total Days:" + totalWorkingDays + "Total Hrs:" + totalEmpHrs + "Emp Wage");

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("Emp Wage with reduce:" + empDailyWagerArr.reduce(totalWages, 0));

//Show the Day along with Daily Wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + "=" + dailyWage;
}
let mapDayWithWageArr = empDailyWagerArr.map(mapDayWithWage);
console.log("Daily Wage Map");
console.log(mapDayWithWageArr);

//Show Days when Full time wage of 160 were earned using filter function
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}

let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("Daily Wage Filter when fulltime wage earned");
console.log(fullDayWageArr);

//Find the first occurrence when Full Time Wage was earned using find function
function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("First time fulltime wage was earned on day:" + mapDayWithWageArr.find(findFulltimeWage));

//Check if Every Element of Full Time Wage is truly holding Full time wage
function isAllFulltimeEage(dailyWage) {
    return dailyWage.includes("160");

}
console.log("Check all element have full time wage:" + fullDayWageArr.every(isAllFulltimeEage));


//Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");

}
console.log("Check if any part time wage:" + mapDayWithWageArr.some(isAnyPartTimeWage));

//Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) {
        return numOfDays + 1;
    }
    return numOfDays;
}

console.log("Number of Days employee worked:" + empDailyWagerArr.reduce(totalDaysWorked, 0));