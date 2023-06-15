type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Ali",
    privileges: ["front-end-developer"],
    startDate: new Date()
};

console.log(e1);