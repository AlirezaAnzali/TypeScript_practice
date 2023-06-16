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


