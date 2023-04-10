// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { array, number } = require("yargs");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]

describe("sentenceGenerator", () => {
  it("returns an array with a sentence about each person with their name capitalized", () => {
    expect(sentenceGenerator(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// test outputs
// FAIL  ./code-challenges.test.js
// sentenceGenerator
//   ✕ returns an array with a sentence about each person with their name capitalized (5 ms)

// ● sentenceGenerator › returns an array with a sentence about each person with their name capitalized

//   expect(received).toEqual(expected) // deep equality

//   - Expected  - 3
//   + Received  + 3

//     Array [
//   -   "Ford Prefect is a hitchhiker.",
//   -   "Zaphod Beeblebrox is president of the galaxy.",
//   -   "Arthur Dent is a radio employee.",
//   +   "Ford prefect is a hitchhiker ",
//   +   "Zaphod beeblebrox is president of the galaxy ",
//   +   "Arthur dent is a radio employee ",
//     ]


// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
// Pseudocode: What do I want to do ? create a function that takes in an array of objects(Input), and returns an array with an sentence about each person with their name capitalized(Output). How do I want to do this ? create function called sentenceGenerator, that will return a sentence with the given array ? How do I do this ? I believe I can use a few built-in methods from Javascript to manipulate the data within the array. First I will use the higher order function Map that takes in a function as an argument(people) the Map()method creates a new array populated with the results of calling a provided function on every element in the calling array. I will use O as a stand in for my people object, and use map return the letter at the 0 index of the array F,Z,and A. then I will call on the .toUppercase method to  returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one). Additionally, I will use the slice method to return a shallow copy of a portion of an array into an new array. In this case I'm using an starting argument of 1 which will select all of the elements starting at 1 to return the rest of the sentence.  To create the sentence itself I will utilize string interpolation With template literals(`` back dashes), I can avoid the concatenation operator (+)  and improve the readability of my code  by using placeholders of the form ${expression} to perform substitutions for embedded expressions. to create strings by doing substitution of placeholders).
// second attempt (refactor) This function takes in an array of objects, where each object has name and occupation properties. It loops over each object, capitalizes each word in the person's name using split(), map(), and join() methods, generates a sentence about the person using the object's properties, and appends the sentence to an array. Finally, it returns the array of generated sentences.I can call on this function with the people array I was provided:

function sentenceGenerator(people) {
  const sentences = [];
  for (const person of people) {
    const name = person.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const sentence = `${name} is ${person.occupation}.`;
    sentences.push(sentence);
  }
  return sentences;
}

// test output :  PASS  ./code-challenges.test.js
//   sentenceGenerator
//   ✓ returns an array with a sentence about each person with their name capitalized (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.487 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 2.07s.


// first attempt was unable to get the last name to capitalize 😔 the last name, will refactor on a second attempt. 
// const sentenceGenerator = () => {
//   return people.map(o => `${o.name[0].toUpperCase() + o.name.slice(1).toLowerCase()} is ${o.occupation} `)
// }



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. 
// Psuedo: create a function called OnlyTheRemaindersIfYouPlease 

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


describe("OnlyTheRemaindersIfYouPlease", () => {
  it("returns an array of only the remainders of the numbers when divided by 3", () => {
    expect(OnlyTheRemaindersIfYouPlease(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(OnlyTheRemaindersIfYouPlease(hodgepodge2)).toEqual([ 2, 1, -1 ])
    
  })
})
// FAIL  ./code-challenges.test.js
// OnlyTheRemaindersIfYouPlease
//   ✕ returns an array of only the remainders of the numbers when divided by 3 (1 ms)

// ● OnlyTheRemaindersIfYouPlease › returns an array of only the remainders of the numbers when divided by 3

//   ReferenceError: OnlyTheRemaindersIfYouPlease is not defined




// b) Create the function that makes the test pass.

// Psuedo: create a function called OnlyTheRemaindersIfYouPlease. What does this function do ? it takes in an array containing mixed data types(input) and it will return an array with only the remainders of the numbers when divided by 3 . How do I accomplish this ? using an built-in method to iterate over the array and return the specific values I'm looking for . I can use the .filter method which filters out any non-numeric elements from the input array using the typeof operator (element === 'number' to specify that I want to return only numbers) and isNaN() (which will check if each element is a valid number or not. This function returns true if the value is not a number, and false if it is a number.) My function then uses the Array.map() method to generate an array of the remainders of those numbers when divided by 3.
// refactor---> My function takes an array of mixed data as its argument. It then filters out any non-numeric elements from the array using the filter method and checks if each element is a valid number using the typeof operator and isNaN() function. It then applies the modulo operator (%) to each numeric element to get its remainder when divided by 3. Finally, it returns an array containing the remainders of all the valid numeric elements in the original array. 
// finally refactor--> Basically, the function takes an array, removes non-numeric elements, and returns an array of remainders of the numeric elements in the input array when divided by 3. The filter() method takes a callback function that gets executed on each element of the input array. This callback function checks whether the element is a valid number and is not NaN, using the typeof operator and isNaN() function, respectively. If the element passes both of these checks, it is kept in the resulting array returned by the filter() method.Therefore, any NaN values or non-numeric values will be removed from the input array before calculating the remainders.


// //  attempt 3 (final refactor)
const OnlyTheRemaindersIfYouPlease = (array) => {
  return array.filter(elem => typeof elem === 'number' && !isNaN(elem)).map(num => num % 3);
}


// (attempt 2) getting closer to how I want to present this function , need to clean it up. const OnlyTheRemaindersIfYouPlease = arr => arr.filter(elem => typeof elem === 'number' && !isNaN(elem)).map(num => num % 3);


// (Attempt 1)  I think I'm going a little too complicated with my approach I'm sure there is an more efficient  way to implement this. 
// const OnlyTheRemaindersIfYouPlease  = (array) => {
//   var remainders = [];
//   for(const element of array) {
//     remainders.push(element % 3);
//   }
//   return remainders;
// }
// test output 
// PASS  ./code-challenges.test.js
// OnlyTheRemaindersIfYouPlease
//   ✓ returns an array of only the remainders of the numbers when divided by 3 (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.576 s, estimated 1 s

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("gameCube", () => {
  it("takes in an array of numbers and returns the sum of all numbers cubed", () => {
    expect(gameCube(cubeAndSum1)).toEqual(99)
    expect(gameCube(cubeAndSum1)).toEqual(99)

  })
})
// // test output :  FAIL  ./code-challenges.test.js
//   gameCube
//   ✕ takes in an array of numbers and returns the sum of all numbers cubed (6 ms)

// ● gameCube › takes in an array of numbers and returns the sum of all numbers cubed

//   ReferenceError: gameCube is not defined

// b) Create the function that makes the test pass.
// Psuedocode: what do I want to do ? create a function that takes in an array of numbers(inputs) and returns the sum of all numbers cubed(output). What will I call this function ? :gameCube. How can I get get the sum of the array ? I can use the array method of reduce() to execute a callback function for each value from left to right in the array and reduce the array to a single value.  How can I cube the sum once I get it from reduce? : reduce accepts two mandatory parameters: the accumulator (total) and the currentValue (item). reduce cycles through each number in the array, much like it would in a traditional for loop.reduce initially takes the first and second items, so next time we jump to the third item. When there are no more numbers left in the array, the method returns the total value. 
// (final attempt)I want to refactor my previous attempts  to cube the sum of the provided arrays, I think I  modify the reduce() function to first calculate the sum of the array, and then cube it. 

// (Final Refactor attempt)
// const gameCube = (array) => { creates a function called gameCube that takes an array of numbers as an input.
const gameCube = (array) => {
  // const sum = array.reduce((total, item) => total + item ** 3, 0); creates a new variable called sum and sets it equal to the result of a reduce function. The reduce function takes two arguments: a function that tells it how to combine the elements of the array, and a starting value (in this case, 0).
  const sum = array.reduce((total, item) => total + item ** 3, 0);
  // The first argument is a function that takes two parameters: total (which is the running total of the sum) and item (which is the current item being processed in the array). This function returns total + item ** 3, which is the sum of the running total and the cube of the current item.

  // to get the cubes of all the numbers in an array, I can modify the gameCube function to cube each element in the array using ** 3, and then sum the cubes using reduce method I implemented in previous attempts 

  return sum;
};

// return sum; returns the final sum from the function.





// (attempt 4): I still can't exactly figure out how to make cube the sum of the function, I know this is dealing with numbers so  perhaps I could use a math method or something similar to modulo? a math operator !? I can return the cube of the sum using the ** operator.  The ** operator is used to cube the sum of the array. The ** operator is an exponentiation operator in JavaScript, and it can be used to raise a number to a power. In this case, I'm raising the sum of the array to the power of 3, which gives us the cube of the sum //For example, if the sum of the array is 9 (as calculated by the reduce() function), then 9 ** 3 would give us the cube of 9, which is 729. I want to only get 99 or 1125 , how can I do this ??
// const gameCube = (array) => {
//   const sum = array.reduce((total, item) => total + (item ** 3,0));
//   return sum ** 2;
// };



// (attempt 3) const gameCube = (array) => {
//   const sum = array.reduce((total, item) => total + item);
//   return sum ** 3;
// }

//(attempt 2) const gameCube = (array) => {
// return array.reduce((total, item) => (total + item), 3);
// } 



// (attempt 1): I can produce the sum of the array but I can't cub the sum, I will research other ways I can do this and go for an refactor. 
// const gameCube = (array) => {
// return array.reduce((total,item) => total + item   );
// }
// test out put  PASS  ./code-challenges.test.js
  // gameCube
  // ✓ takes in an array of numbers and returns the sum of all numbers cubed (2 ms)

  // Final testing outputs  PASS  ./code-challenges.test.js
//   sentenceGenerator
//   ✓ returns an array with a sentence about each person with their name capitalized (3 ms)
// OnlyTheRemaindersIfYouPlease
//   ✓ returns an array of only the remainders of the numbers when divided by 3 (1 ms)
// gameCube
//   ✓ takes in an array of numbers and returns the sum of all numbers cubed (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        1.036 s
// Ran all test suites.
// ✨  Done in 3.06s.
