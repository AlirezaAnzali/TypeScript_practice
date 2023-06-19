function Logger (constructor: Function) {
    console.log("Logging...");
    console.log(constructor);
}

@Logger
class Person {
    name = "Ali";

    constructor() {
        console.log("Creating Person Object ...");
    }
}

const pers = new Person();
console.log(pers);