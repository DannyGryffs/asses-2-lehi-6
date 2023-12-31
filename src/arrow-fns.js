// Unit 2 Assessment: arrow-fns.js

// Set the value of giveMeTwo to an arrow function that returns 2.
//
// Ex.:
//   giveMeTwo();(
//   => 2
//completed
const giveMeTwo = () => 2 

giveMeTwo();

// Set the value of addNums to an arrow function that takes in two numbers and
// returns their sum.
//
// Ex.:
//   addNums(1, 2);
//   => 3
//completed
const addNums = (num1, num2) => num1 + num2;

addNums(1, 2);

// Set the value of max to an arrow function that takes in two numbers and
// returns the largest one.
//
// Ex.:
//   max(1, 2);
//   => 2
//completed
const max = (num1, num2) => {
    if(num1 > num2){
        return num1
    }else{
        return num2
    }
}

max(1, 2);

// Given an array of numbers, return a new array that only includes the even
// numbers. Do this using array iteration methods. Do NOT use a for loop.
//
// Ex.:
//   evens([1, 2, 3, 4, 5]);
//   => [2, 4]
//completed
function evens(nums) {
    let newArr = nums.filter ((element, index, arr) => {
        return element % 2 === 0
      })
      return newArr
}

// Given an array of names, return a new array of greetings for each name. Do
// this using array iteration methods. Do NOT use a for loop.
//
// Ex.:
//   createGreetings(['Clive', 'Jill', 'Torgal']);
//   => ['Hello, Clive!', 'Hello, Jill!', 'Hello, Torgal!']
//completed
function createGreetings(names) {
    let newArr = names.map((element, index, array) => {
        return `Hello, ${element}!`
    })
    return newArr
}
createGreetings(['Clive', 'Jill', 'Torgal']);

// Given an array of words, return a new array where each word is uppercased
// and only includes words that are longer than 4 characters. Do this using
// array iteration methods (you may need more than one). Do NOT use a for loop.
//
// Ex.:
//   loudLongWords(['apple', 'pear', 'cake', 'pinata']);
//   => ['APPLE', 'PINATA']
//not there yet//
function loudLongWords(words) {
    let lWords = words.filter((element, index, array) => {
        if (element.length > 4){
            return element
        }
    })
   let finishedArr = lWords.map((element, index, array) => {
      return element.toUpperCase()
    })
    return finishedArr
}
loudLongWords(['apple', 'pear', 'cake', 'pinata']);

export { addNums, createGreetings, evens, giveMeTwo, loudLongWords, max };
