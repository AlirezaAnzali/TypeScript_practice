class Department {
//   public name: string;
//   private id: string;
  private employees: string[] = [];

  constructor(public name: string, private id: string) {
    // this.name = name;
    // this.id = id;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
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

const accounting = new Department("Accounting", "d1");

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