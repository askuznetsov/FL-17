// write your code here

const arr = [1, 2, 3, 4, 5];

//1
function getMaxEvenElement(arr) {
  return Math.max(...arr.filter((item) => item % 2 === 0));
}

console.log(getMaxEvenElement(arr));

//2
let a = 3;
let b = 5;

[a, b] = [b, a];

console.log(a);
console.log(b);

//3
const getValue = (arg) => arg ?? "-";

console.log(getValue(0));
console.log(getValue(4));
console.log(getValue("someText"));
console.log(getValue(null));
console.log(getValue(undefined));

//7
const getArrayWithUniqueElements = (arr) => Array.from(new Set(arr));

console.log(getArrayWithUniqueElements([2, 3, 4, 2, 4, "a", "c", "a"]));

//8
const phoneNumber = "0123456789";
const hideNumber = (number) =>
  number.slice(number.length - 4, number.length).padStart(number.length, "*");
console.log(hideNumber(phoneNumber));

//9
const isRequired = () => {
  throw new Error("b is required");
};
const addFunction = (a = isRequired(), b = isRequired()) => a + b;

console.log(addFunction(2, 3));

//4
const arrayOfArrays = [
  ["name", "dan"],
  ["age", "21"],
  ["city", "lviv"]
];
const getObjFromArray = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i][0]] = arr[i][1];
  }
  return obj;
};

console.log(getObjFromArray(arrayOfArrays));

const oldObj = {
  name: "willow",
  details: { id: 1, age: 47, university: "LNU" }
};

const getRegroupedObject = (obj1) => {
  let { name, details } = obj1;
  const finalObj = {};
  finalObj[name] = details.university;
  return finalObj;
};
