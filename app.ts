function Logger (logString: string) {
    return function(constructor: Function){
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    return function(constructor:any) {
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1")!.textContent = p.name;
        }
    }
}

@Logger("LOGGING-PERSON") // executed second
@WithTemplate("<h1>My Person Object</h1>", "app") // executed first
class Person {
  name = "Ali";

  constructor() {
    console.log("Creating Person Object ...");
  }
}

const pers = new Person();
console.log(pers);