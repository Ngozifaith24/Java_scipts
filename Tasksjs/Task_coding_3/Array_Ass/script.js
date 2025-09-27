let shoppingList = ["bread", "sugar", "Tomatoes", "eggs", "garri"]
let total = 0
console.log("Shopping List", shoppingList)
shoppingList.push("beans")
shoppingList.shift("bread")
console.log("")
console.log("New Shopping List", shoppingList)
console.log("Caculating Total:");
for (let list of shoppingList) {
    console.log("Adding list:", shoppingList.length);
    total += list;
}
console.log(`Total:${total}`)

console.log("")

console.log("Shopping List in the array:");
for (let i =0; i < shoppingList.length; i++){
    console.log(`ShoppingList ${i + 1}: ${shoppingList[i]}`);

}
console.log("")



// function formatList(list)
// Task 2: Student Grades Analyzer
// 1. Store grades in an array 
let grades = [40, 59, 80, 85, 90]
console.log("Grades", grades)
console.log("")
// 2. Write a function `getAverage(grades)` to calculate average grade
function getAverage(grades){
    let total = 0
    for(let grade of grades){
        total += grade;
    }
    return total /grades.length
}
console.log("Average score:",getAverage(grades))

// 3. Write a function `getHighest(grades)` to find the highest grade
function getHighest(grades){
    let highest =grades[0];
    for(let grade of grades){
        if(grade > highest){
            highest= grade;
        }
    }
    return highest;
}
console.log("Highest Grade:", getHighest(grades))

// 4. Write a function `getLowest(grades)` to find the lowest grade
function getLowest(grades){
    let lowest =grades[0];
    for(let grade of grades){
        if(grade < lowest){
            lowest= grade;
        }
    }
    return lowest;
}
console.log("Lowest Grade:", getLowest(grades))

// 5. Use loops where necessary to process the array
console.log("Grades using for ...of loop")
for (let grade of grades){
    console.log(grade);
}

// // **Challenge:**  
// Create a function `getPassRate(grades)` that: 

function getPassRate(grades){
let passing = 0;
for(let grade of grades){
    if(grade >= 50){
        passing++;
    

    }
}
return passing;
} 
console.log("Passing:", getPassRate(grades))
console.log("After Dividing:",getPassRate(grades)/ grades.length)
console.log("Percentage:", getPassRate(grades)/grades.length * 100 + "%")
// - Counts how many students scored **50 or above** (passing)  
// - Divides that number by the total number of students  
// - Returns the **percentage of students who passed** 

// ## 🎯 Practice Exercise 3

// **Task:** Movie Ratings System  

// **Requirements:**  
// 1. Create two arrays: `movies` (names) and `ratings` (numbers)  
// 2. Write a function `addMovie(movie, rating)` that adds a new entry  
// 3. Write a function `getAverageRating()` to calculate the average rating  
// 4. Write a function `getTopMovie()` to find the highest-rated movie  
// 5. Print a summary of all movies with their ratings  

// **Challenge:**  
// Sort the movies by rating (highest → lowest) and display the sorted list.
// Task 3
// 1. Create two arrays: `movies` (names) and `ratings` (numbers)  
let movies = ["Ruse 2", "Ruse 1", "Ruse 3", "wedding party"]
let ratings = [5, 3,4,5]
console.log("Movies:", movies)
console.log("Ratings", ratings)
function addMovie(movie, rating){
    movies.push(movie)
    ratings.push(rating);
}
addMovie("chosen", "6")
console.log("Afteradding a movie",movies)
console.log("After adding",ratings)
console.log("")

function getAverageRating(){
    let total = 0
    for (let rating of ratings){
        total += rating;
    }
    return total / ratings.length;

}
console.log("The Average ratings:",getAverageRating(ratings))

console.log("")

function getTopMovie(){
    
}



// ## 🎯 Practice Exercise 4

// ### Comprehensive Practice Exercise: Student Report System

// Build a program that manages student grades using arrays, loops, and functions.

// **Your Challenge:**  
// Create a system with multiple functions that can:

// 1. **Add Student** - Store student names and their grades in an array  
// 2. **Calculate Average** - Compute the average grade for the class  
// 3. **Find Top & Bottom Student** - Identify the student with the highest and lowest score  
// 4. **Grade Categorizer** - Assign letter grades (A, B, C, D, F) based on numeric scores  
// 5. **Report Generator** - Print a formatted class report showing:  
//    - Each student’s name, grade, and letter grade  
//    - Class average  
//    - Top student  
//    - Lowest student  

// **Requirements:**  
// - Use arrays to store multiple students  
// - Use `for` or `for...of` loops to process data  
// - Write at least 5 reusable functions  
// - Validate inputs (no negative grades, no grades above 100)  
// - Use `Math.max()` and `Math.min()` for comparisons  
// - Return results in a well-formatted way (like a table or list)  

// **Challenge:**  
// Sort the students by grade (highest → lowest) before printing the report.  
