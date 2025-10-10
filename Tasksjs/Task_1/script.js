// ## 🎯 Practice Exercise 1: Student Profile Card

// **Task:** Create a comprehensive student profile with string manipulation

// **Requirements:**
// 1. Create variables for:
//    * `firstName`, `lastName`, `age`, `schoolName`, `grade`, `isGraduated` (boolean)
// 2. Combine first and last name into `fullName`
// 3. Show how many characters are in `fullName`
// 4. Print a nicely formatted profile card using **template literals**
// 5. Use string methods to display:
//    * The name in **uppercase**
//    * The school name in **lowercase**
//    * A trimmed version of the grade (if it has extra spaces)
// 6. Add a variable `nextYearAge = age + 1` and include it in the profile

// **Sample Output:**
// ```
// --- Student Profile ---
// Name: ALICE JOHNSON
// Full Name Length: 13 characters
// Age: 20 (Next Year: 21)
// School: javascript academy
// Grade: A
// Graduated: false
// ```

// **Challenge:** Add validation to check if the student is eligible for graduation (age >= 18)

// **Build it in the cell below:**

function displayInfo(){
    let firstName = "Omuekwu"
    let lastName = "Ngozi"
    var age = 27
    var isStudent = true
    const favColor = "Black"
    age_in_5 = age + 5;
    // alert("Button clicked")

   let output = `

   <div class = "output">
   <p> 
        My first name is: ${firstName}.
   </p>

    <p> 
        My last name is: ${lastName}.
   </p>

    <p> 
        I am ${age}.
   </p>

   <p> 
        Am I a student? well that's ${isStudent}.
   </p>
     <p> 
   I will ${age_in_5} in 5 years.
   </p>
   <p> 
        Fun fact about me: My favorite color is ${favColor}.
   </p>
   </div>
    ` ;

    document.getElementById("text").innerHTML = output;
    console.log(firstName, lastName)
}
// ## 🎯 Practice Exercise 2: Advanced Simple Calculator

// **Task:** Build a comprehensive calculator with multiple operations and comparisons

// **Requirements:**
// 1. Create two number variables: `num1` and `num2`
// 2. Perform and log:
//    * Addition, subtraction, multiplication, division, remainder, exponentiation
// 3. Show results using **template literals** with explanations
// 4. Add a variable `average = (num1 + num2) / 2` and display it
// 5. Add a boolean check `isNum1Greater = num1 > num2` and display the result
// 6. Add a line that prints:
//    ```
//    "Between 8 and 3, the larger number is 8"
//    ```
//    (Hint: use a comparison operator and template literal)

// **Sample Output:**
// ```
// --- Simple Calculator ---
// Numbers: 8 and 3

// Addition: 11
// Subtraction: 5
// Multiplication: 24
// Division: 2.6666666667
// Remainder: 2
// Exponentiation: 512
// Average: 5.5
// Is Num1 greater than Num2? true
// Between 8 and 3, the larger number is 8
// ```

// **Challenge:** Make it interactive by using `prompt()` to get numbers from the user

