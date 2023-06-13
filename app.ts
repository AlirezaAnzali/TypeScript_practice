class Department {
  //   public name: string;
  //   private readonly id: string;
  private employees: string[] = [];

  constructor(public name: string, private readonly id: string) {
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
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super("Accounting", id);
  }

  addReport(text: string) {
    this.reports.push(text);
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

const itDepartment = new ITDepartment("d2", ["Ali"]);
console.log(itDepartment);

const accountingDepartment = new AccountingDepartment("d1", ["spring 2023 quarter report", "summer 2023 quarter report"]);
console.log(accountingDepartment);
accountingDepartment.addReport("Something went wrong");
accountingDepartment.printReport();