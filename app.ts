const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name: "Alireza",
    age: 35,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
}

// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}


// const product:{
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   }
// } = {
//   id: "abc1",
//   price: 12.99,
//   tags: ["great-offer", "hot-and-new"],
//   details: {
//     title: "Red Carpet",
//     description: "A great carpet - almost brand-new!",
//   },
// };