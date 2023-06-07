// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: "Alireza",
//     age: 35,
//     hobbies: ["Sports", "Cooking"],
//     role: [2, "author"]
// }


enum Role {ADMIN, READ_ONLY, AUTHOR}; 

const person = {
  name: "Alireza",
  age: 35,
  hobbies: ["Sports", "Cooking"],
  role: Role.AUTHOR,
};

let favoriteActivities: any[];
favoriteActivities = ["Sports", 5];

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