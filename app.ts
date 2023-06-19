function Logger (logString: string) {
    return function(constructor: Function){
        console.log(logString);
        console.log(constructor);
    }
}

@Logger("LOGGING-PERSON")
class Person {
    name = "Ali";

    constructor() {
        console.log("Creating Person Object ...");
    }
}

const pers = new Person();
console.log(pers);