type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee; //intersection-types

const e1: ElevatedEmployee = {
    name: "Ali",
    privileges: ["front-end-developer"],
    startDate: new Date()
};

// console.log(e1);


type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; //intersection-types

function add(a: Combinable, b:Combinable) {
    if (typeof a === "string" || typeof b === "string") //type-guards
    {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee  = Employee | Admin; //union

function printEmployeeInformation (emp: UnknownEmployee) {
    console.log("Name : " + emp.name); // no problem, because both Employee and Admin have name property, but we should define 2 type guards for proceed:
    if ("privileges" in emp) {
        console.log("Privileges : "+ emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date : " + emp.startDate);
    }
}

printEmployeeInformation(e1);
// printEmployeeInformation({name:"Eli", startDate: new Date()});


class Car {
    drive() {
        console.log("Driving ...");
    }
}

class Truck {
  drive() {
    console.log("Driving a truck ...");
  }
  loadCargo(amount: number) {
    console.log("Driving a truck ..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car;
const v2 = new Truck;

function useVehicle (vehicle: Vehicle) {
  vehicle.drive();
  //type guard:
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);



