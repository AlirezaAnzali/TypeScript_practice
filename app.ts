abstract class Department {
  //   public name: string;
  //   private readonly id: string;

  static fiscalYear = 2023;
  protected employees: string[] = [];

  constructor(public name: string, protected readonly id: string) {
    // this.name = name;
    // this.id = id;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // maybe we want some validation here
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  // admins: string[];
  constructor(id: string, public admins: string[]) {
    super("IT", id);
    // this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {

  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report Found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!")
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super("Accounting", id);
    this.lastReport = reports[0];
  }

  describe (){
    console.log("Accounting Department - ID: " + this.id)
  }

  addEmployee(employee: string) {
    if (employee === "Ali") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReport() {
    console.log(this.reports);
  }
}

// class Product {
//   title: string;
//   price: number;
//   private isListed: boolean;

//   constructor(name: string, pr: number) {
//     this.title = name;
//     this.price = pr;
//     this.isListed = true;
//   }
// }

// code above could be shorter as below:

// class Product {
//   private isListed: boolean;

//   constructor(public title: string, public price: number) {
//     this.isListed = true;
//   }
// }


// const accounting = new Department("Accounting", "d1");

// accounting.addEmployee("Alireza");
// accounting.addEmployee("Max");

// // accounting.employees[2]= "Sara";  //Property 'employees' is private and only accessible within class 'Department'

// accounting.describe();
// accounting.printEmployeeInformation();

// const accountingCopy = {
//     name: "DUMMY",
//     describe: accounting.describe
// };

// accountingCopy.describe();

const employee1 = Department.createEmployee("Eli");
console.log(employee1, Department.fiscalYear);

const itDepartment = new ITDepartment("d2", ["Ali"]);
// console.log(itDepartment);

const accountingDepartment = new AccountingDepartment("d1", ["spring 2023 quarter report", "summer 2023 quarter report"]);
// console.log(accountingDepartment);
accountingDepartment.mostRecentReport ="Annual Report";
console.log(accountingDepartment.mostRecentReport);
// accountingDepartment.addReport("Something went wrong");
// accountingDepartment.printReport();
// accountingDepartment.addEmployee("Ali"); //because of if statement, will not be added.
// accountingDepartment.addEmployee("Max");
// accountingDepartment.printEmployeeInformation();
accountingDepartment.describe();