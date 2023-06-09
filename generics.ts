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

//generics-generic-classes:

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}


const textStorage = new DataStorage<string>();
textStorage.addItem("Hello")
console.log(textStorage.getItems());
textStorage.addItem("World");
console.log(textStorage.getItems());
textStorage.removeItem("World");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
console.log(numberStorage.getItems());

//------------------------------------------------------------------------

//generics-generic-utility-types: Partials

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

// function createCourseGoal(
//     title:string, description:string, date:Date
// ): CourseGoal {
//     return { title:title, description:description, completeUntil:date };
// }

//or we can define the function like this:

function createCourseGoal(
    title:string, description:string, date:Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

//another example: readonly

const names: Readonly<string[]> = ["Ali", "Eli", "Oli"];
// names.push("Uli");
// names.pop();

//------------------------------------------------------------------------------




