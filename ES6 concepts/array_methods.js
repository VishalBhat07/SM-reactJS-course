const data = [
  {
    name: "Vishal",
    age: 18,
    country: "India",
  },
  {
    name: "John",
    age: 20,
    country: "USA",
  },
  {
    name: "Karl",
    age: 80,
    country: "Australia",
  },
  {
    name: "Vijay",
    age: 18,
    country: "India",
  },
];

let names = data.map((singlePerson, index) => {
  return `${index} : ${singlePerson.name}'s age is ${singlePerson.age}`;
});

console.log(names);

let findPeople = data.find((singlePerson, index) => {
  return singlePerson.country === "India";
});

console.log(findPeople);

let filterPeople = data.filter((singlePerson, index) => {
  return singlePerson.country === "India";
});

console.log(filterPeople);

let check1 = data.some((singlePerson) => {
  return singlePerson.age > 40;
});

console.log(check1);

let check2 = data.every((singlePerson) => {
  return singlePerson.age >= 18;
});

console.log(check2);

let fruits = ["apple", "banana", "guava"];
console.log(fruits.includes("apple"));
console.log(fruits.includes("watermelon"));

let getIndex = data.findIndex((singlePerson, index) => {
  return singlePerson.country === "USA";
});

console.log(getIndex);
