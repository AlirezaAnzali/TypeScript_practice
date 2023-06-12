class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    // maybe we want some validation here
    this.employees.push(employee);
  }

  printEmployeeInformation(){
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee("Alireza");
accounting.addEmployee("Max");

// accounting.employees[2]= "Sara";  //Property 'employees' is private and only accessible within class 'Department'

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = {
//     name: "DUMMY",
//     describe: accounting.describe
// };

// accountingCopy.describe();