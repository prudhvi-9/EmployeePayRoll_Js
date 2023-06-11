//Perform following Object operations using Arrow Functions
// Perform Object operations using Arrow Functions
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
let empDailyHrsAndWageArr = new Array();

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
    empDailyHrsAndWageArr.push({
        dayNum: totalWorkingDays,
        dailyHours: empHrs,
        dailyWage: calDailyWage(empHrs),
        toString() {
            return '\nDay' + this.dayNum + '=>Working Hours is ' + this.dailyHours + ' And Wage Earned= ' + this.dailyWage
        },
    });
}



// Calc total Wage and total hours worked
let totalWages = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);

let totalHours = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);

console.log("Total Wages : " + totalWages + " \nTotal Hours Worked : " + totalHours);


// Show the full workings days using foreach 
console.log("Full Work Days :");
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
    .forEach(dailyHrsAndWage => console.log(dailyHrsAndWage.toString()));

// Show Part working days using Map by reducing to String Array
let partWorkingDayStrArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
    .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("Part Working Days :" + partWorkingDayStrArr);

//No working days only using Map function
let nonWorkingDaysNums = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
    .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("Non Woking Days:" + nonWorkingDaysNums);
