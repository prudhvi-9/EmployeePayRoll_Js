// Ability to extend Employee Payroll Data to store gender and start date
class EmployeePayRollData {
    //property
    id;
    salary;
    gender;
    startDate;

    //constructor
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }

    //getter and setter method
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }

    //method
    toString() {
        // const options = { year: 'numeric', month: 'long', day: 'numeric' };
        // const empDate = this.startDate === undefined ? "undrfined" : this.startDate.toLocalDateString("en-US", options);
        return "id= " + this.id + ",name=" + this.name + ",salary=" + this.salary + ",gender=" + this.gender + ",startDate=" + this.startDate;
    }

}


let employeePayRollData = new EmployeePayRollData(1, "John", 40000);
console.log(employeePayRollData.toString());
employeePayRollData.name = "kevin";
console.log(employeePayRollData.toString());
let newEmployeePayrollData = new EmployeePayRollData(2, "Terrisa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());
