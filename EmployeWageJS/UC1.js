//Ability to Check Employee ispresent or Absent.
const Is_Absent = 0;

let empcheck = Math.floor(Math.random() * 10) % 2;
if (empcheck == Is_Absent) {
    console.log("Employee is absent");
} else {
    console.log("Employee is present");
}