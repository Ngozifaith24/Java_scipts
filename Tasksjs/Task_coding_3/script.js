// // let fruits = ["apple", "banana", "orange", "grape"];
// // let numbers = [10, 25, 30, 45,50];
// // let booleans = [true, false, true,true];
// // let mixedArray = ["John", 25, true, "student"];

// // let emptyArray = [];

// // console.log("Fruits array:", fruits);
// // console.log("Numbers array:", numbers);
// // console.log("Mixed array:", mixedArray);
// // console.log("Empty array:", emptyArray);
// // console.log("Booleans:", booleans)

// // console.log("");

// // console.log("Number of fruits:", fruits)
// // console.log("Number of numbers", numbers.length);
// // console.log("Empty array length:",emptyArray.length);

// // console.log("");

// // console.log("First fruits:", fruits[0]);
// // console.log("Second fruit:", fruits[1]);
// // console.log("Last fruit:", fruits[fruits.length-1]);

// // console.log("");

// // console.log("First number:", numbers[0]);
// // console.log("Third number:", numbers[2]);
// // console.log("index that doesn't exist:", fruits[10]);
// // console.log("");

// // // Modifying Arrays
// // let colors = ["red", "green", "blue"];
// // console.log("Original colors:", colors);
// // // Changing existing elements
// // colors[0] = "purple";
// // colors[2] = "yellow";
// // console.log("After changes:", colors)
// // console.log("");

// // // Adding elements to the end with push()
// // let shoppingList = ["milk", "bread"];
// // console.log("Original List:", shoppingList);

// // shoppingList.push("eggs");
// // shoppingList.push("cheese", "butter", "Biscuit");
// // console.log("")
// // console.log("New List:", shoppingList);

// // console.log("")

// // // Removing the last element with pop()
// // let removedItem = shoppingList.pop();
// // console.log("Removed item:", removedItem)
// // console.log("List after removing:", shoppingList)

// // console.log("")

// // // Adding elements to the beginig with unshift()
// // shoppingList.unshift("apples");
// // console.log("After adding to front:", shoppingList);
// // console.log("")

// // // Removing the first element with shift()
// // let firstItem = shoppingList.shift();
// // console.log("Removed first item:", firstItem);
// // console.log("Final list:", shoppingList);

// // console.log("");

// // let students = ["Alice", "Bob", "Charlie", "Diana"];
// // console.log("Students:", students);
// // console.log("Is Bob in class?", students.includes("Bob"));
// // console.log("Where is Charlie?", students.indexOf("Charlie"));
// // console.log("Where is Frank?", students.indexOf("Frank"));

// // console.log("")

// // More Array Methods
// let numbers = [1,2,3,4,5];
// let names = ["John", "Jane","Bob","Alice"];
// console.log("Original numbers:", numbers);
// console.log("Original names:", names)
// console.log("")

// // using slice()-Get a portion of the array(doesn't change original)
// let firstThree = numbers.slice(0,3);
// let lastTwo = numbers.slice(-2);
// console.log("First three numbers:", firstThree)
// console.log("Last two numbers:", lastTwo);
// console.log("Original unchanged:", numbers);

// console.log("")

// // Splice()- remove/add items at a specific position(changes original)
// let fruits = ["apple", "banana", "orange", "grape","kiwi"];
// console.log("Original fruits:", fruits)

// // Removes 2 items starting at index 1
// let removed = fruits.splice(1,2)
// console.log("Removed items:",removed);
// console.log("After removal:", fruits)

// // Add item at index 1
// fruits.splice(1,0,"mango", "pineapple");
// console.log("");

// let words = ["Hello", "from", "Javascripts"];
// let sentence = words.join(" ");
// let csv = words.join(",");
// console.log("Words array:", words);
// console.log("As sentence:",sentence);
// console.log("As CSV:", csv)

// console.log("");

// let message = "apple, banana, orange";
// let fruitArray = message.split(",")
// console.log("string:", message)
// console.log("Split into Array:", fruitArray);

// console.log("")

// let countdown = [1,2,3,4,5];
// console.log("Original countdown:", countdown);
// countdown.reverse();
// console.log("Reversed countdown:", countdown);

// // LOOPS Structure:
// // this is used for initialization;condition;increment)
// // code to repeat
// // }

// // Simple counting loop
// console.log("Counting from 1 to 5:");
// for (let i = 1; i <= 5; i++){
//     console.log("Count:", i);
// }
// console.log("");

// console.log("Countdown from 5 to 1:");
// for (let i = 5; i >=1; i--){
//     console.log("Countdown:", i);
// }
// console.log("Blast off");
// console.log("")

// // Using loops with caculations
// console.log("Multiplication table for 3:");
// for (let i = 1; i <= 10; i++) {
//     let result = 3 * i;
//     console.log(`3 x ${i} = ${result}`);
// }
// console.log("")

// // Loop through an array using index
// let colors = ["red", "green", "blue", "yellow"];
// console.log("Colors in the array:");
// for (let i =0; i < colors.length; i++){
//     console.log(`Color ${i + 1}: ${colors[i]}`);

// }
// console.log("")

// For ...Of Loop and Array Processing
// This one of the loops that makes it easier to go through arrays items
let fruits = ["apple", "banana", "orange", "grape"];
console.log("Using for...of loop:");
for (let fruit of fruits) {
    console.log("I like", fruit);
}
console.log("");

// Compare with traditional for loop
console.log("Using traditional for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log("I like", fruits[i]);
}

console.log("")
// Processing numbers with for...of
let scores = [85, 92, 78, 96, 88];
let total = 0

console.log("Caculating average score:");
for (let score of scores) {
    console.log("Adding score:", score);
    total += score;
}

let average = total / scores.length;
console.log(`Total: ${total}, Average: ${average.toFixed(1)}`);

console.log("");
// Using Loops with conditions
let temperature = [68, 72, 85, 90, 75, 82, 88];
let hotDays = 0;
let coldDays = 0;
console.log("Analyzing temperature:");
for (let temp of temperature) {
    if (temp >= 85) {
        hotDays++;
        console.log(`${temp}oF- Hot day!`);
    } else if (temp < 70) {
        coldDays++
        console.log(`${temp}oF- Cold day!`);
    } else {
        console.log(`${temp}oF-Nice day!`);
    }
}
console.log(`Summary: ${hotDays} hot days, ${coldDays} cold days`);
console.log("")

// // Building new arrays with loops
// let numbers = [1,2,3,4,5];
// let doubled = [];

// console.log("Doubling each number:");
// for (let num of numbers){
//     let doubledValue = num *2;
//     doubled.push(doubledValue);
//     console.log(`${num} x 2 = ${doubledValue}`);
// }
// console.log("Original:",numbers);
// console.log("Doubled:", doubled);

// While Loops- repeats as long as long condition is true 
// While (condition){
//  code to repeat
// }

// console.log("Basic while loop- counting to 5:");
// let count = 1;
// while (count <= 5) {
//     console.log("Count is:", count);
//     count++;
// }
// console.log("");

// let numbers = [2, 4, 6, 8, 10, 12];
// let i = 0;
// let foundOdd = false;

// console.log("Looking for first odd number:");
// while (i < numbers.length && !foundOdd) {
//     console.log(`Checking ${numbers[i]}...`);
// }
// if (numbers[i] % 2 === 1) {
//     console.log(`Found odd number: ${number[1]}`);
//     foundOdd = true;
// } else {
//     console.log(`${numbers[i]} is even, continuing...`);
// }
// i++;

// if (foundOdd){
//     console.log("No odd numbers found!")
// }
// console.log("")
// //  do... while loop - runs at least once
// let number =1;
// do{
//     console.log("Number is:" + number);
//     number++;
// } while (number <= 3);
// console.log("Loop finished!");

// Array methods that use functions
// Modern array methods that makes processing easier
let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log("Original numbers:", numbers)
console.log("")

console.log("Using foreach to print each number:");
numbers.forEach(function(number){
    console.log("number:", number)
});
console.log("")

// More concise with arrow function
console.log("forEach with arrow function:");
numbers.forEach(number => console.log(`Value: ${number}`));

console.log(""); // Empty line

// map() - Transform each element and create new array
console.log("Using map to double each number:");
let doubled = numbers.map(function(number) {
    return number * 2;
});
console.log("Doubled:", doubled);

// Shorter arrow function version
let tripled = numbers.map(number => number * 3);
console.log("Tripled:", tripled);

console.log(""); // Empty line

// filter() - Keep only elements that meet condition
console.log("Using filter to get even numbers:");
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log("Even numbers:", evenNumbers);

// Get odd numbers with arrow function
let oddNumbers = numbers.filter(number => number % 2 === 1);
console.log("Odd numbers:", oddNumbers);

console.log(""); // Empty line

// find() - Get first element that meets condition
let firstBigNumber = numbers.find(number => number > 5);
console.log("First number > 5:", firstBigNumber);

