// "use strict"
// Set 2:
// 1. Write a JavaScript program to find the length of a given string.
// Sample Input: Hello;
// Sample Output: 5

function findLength(str) {
  let length = 0;
  for (let i = 0; i < str.length; i++) {
    length++;
  }
  return length;
}

const string = 'ajay';
const lengthOfStr = findLength(string);
console.log(lengthOfStr);

//(or)

const str = 'ajay';

console.log(str.length);

// 2. Write a JavaScript function to concatenate two arrays.
// Sample Input: ([1, 2, 3], [4, 5, 6]);
// Sample Output: [1, 2, 3, 4, 5, 6]

const arrOne = [1, 2, 3, 4, 5];
const arrTwo = [6, 7, 8, 9, 10];

function concatenateArr() {
  let newArr = [...arrOne, ...arrTwo];
  return newArr;
}
const concatenatedArr = concatenateArr();
console.log(concatenatedArr);

// 3. Write a JavaScript program to swap the values of two variables.
// Sample Input: x = 5, y = 10;
// Sample Output: [10, 5]

let a = 40;
let b = 15;

let c = a;
a = b;
b = c;

console.log([a, b]);

// 4. Write a JavaScript program to calculate the average of an array of numbers.
// Sample Input: ([1, 2, 3, 4, 5]);
// Sample Ouput: 3

const array = [10, 11, 12, 13, 14, 10, 1, 45];

function findAverage(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  const average = sum / arr.length;
  return average;
}
console.log(findAverage(array));

// 5. Write a JavaScript function to find the largest and smallest elements in an array.
// Sample Input: ([1, 2, 3, 4, 5]);
// Sample Output: [1, 5]

const arrayOfNum = [20, 32, 65, 88, 99, 45, 56];

function findMaxMinNum(arr) {
  const largest = Math.max(...arr);
  const smallest = Math.min(...arr);
  return [largest, smallest];
}
const result = findMaxMinNum(arrayOfNum);
console.log(result);

// 6. Write a JavaScript function to find the index of the first occurrence of a given element in
// an array.
// Sample Input: ([1, 2, 3, 4, 5], 3);
// Sample Output: 2

const arr = [5, 4, 8, 9, 7, 6];

function findIndex(arr) {
  const indexVal = arr.indexOf(7);
  return indexVal;
}

const indexValue = findIndex(arr);
console.log(indexValue);

// 7. Write a JavaScript function to check if a given string is a valid email address.
// Sample Input: ("test@example.com");
// Sample Output: true

const email = 'test@example.com';

function validateEmail(email) {
  const emailFormat = email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  return !!emailFormat;
  // double exclamation mark is used to convert a value into true or false
}

const validEmail = validateEmail(email);
console.log(validEmail);

// 8. Write a JavaScript program to count the number of occurrences of each element in an array.
// Sample Input: ([1, 2, 2, 3, 3, 3]);
// Sample Output: {1: 1, 2: 2, 3: 3}

const numbers = [2, 2, 2, 3, 5, 5, 6, 9, 9, 9];

function countOccurrences(arr) {
  const occurrences = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (occurrences[element]) {
      occurrences[element]++;
    } else {
      occurrences[element] = 1;
    }
  }

  return occurrences;
}

const resultOf = countOccurrences(numbers);
console.log(result);
// 9. Write a JavaScript function to implement a binary search algorithm on a sorted array.
// Sample Input: ([1, 2, 3, 4, 5], 4);
// Sample output: 3

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(arr, element) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === element) {
      return mid;
    }

    if (arr[mid] < element) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Usage example:
console.log(binarySearch(number, 8));
// 10. Write a JavaScript program to find the intersection of two arrays (common elements).
// Sample Input: ([1, 2, 3], [2, 3, 4]);
// Sample Output: [2, 3]
function findIntersection(arr1, arr2) {
  const intersection = [];

  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];

    // Check if the element exists in arr2
    if (arr2.includes(element)) {
      intersection.push(element);
    }
  }

  return intersection;
}

const array1 = [1, 2, 3, 5, 6];
const array2 = [2, 3, 4, 5, 6];
const results = findIntersection(array1, array2);
console.log(results);