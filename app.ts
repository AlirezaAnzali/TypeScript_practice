// const names: Array<string> = ["Ali", "Eli"];
// // console.log(names[0].split(""));

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("This is done");
//     }, 2000);
// })

function merge<T extends object,U extends object> (objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// console.log(merge({name: "ALI"}, {age: 30}));

const mergedObj = merge({ name: "ALI" }, { age: 30 });
console.log(mergedObj.age);

//--------------------------------------------------------------------------------

//another generic:

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy> (element: T): [T, string] {
    let descriptionText = "Got no value!";
    if (element.length === 1) {
        descriptionText = "Got one element.";
    } else if (element.length > 1) {
      descriptionText =
        "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}

console.log(countAndDescribe("Hello World!"));
console.log(countAndDescribe(["1", "2", "3"]));
console.log(countAndDescribe(""));

//-------------------------------------------------------------------------------

//generics-keyof-constraints:

function extractAndConvert<T extends object, U extends keyof T> (obj:T, key:U) {
    return "value: " + obj[key];
}

console.log(extractAndConvert({ name: "Ali", age: 30 }, "name"));

//-------------------------------------------------------------------------------
