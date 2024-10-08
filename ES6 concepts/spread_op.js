function product(a, b = 1) {
  console.log(a * b);
}

product(5, 2);
product(5, 1);

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
console.log(array1);
console.log(...array1);
console.log([100, ...array1, ...array2]);

function getInfo(a, ...c) {
  console.log(a, c);
}

getInfo(1, 2, 3, 4, 5, 6);
