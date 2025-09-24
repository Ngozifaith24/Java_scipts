// ## 🎯 Practice Exercise 1

// **Task:** Simple Grading System  

// **Requirements:**  
// 1. Create a function `getGrade(score)`  
// 2. Use if/else if statements to assign grades:  
//    - 90+ → "A"  
//    - 80–89 → "B"  
//    - 70–79 → "C"  
//    - 60–69 → "D"  
//    - Below 60 → "F"  
// 3. Return a message like: `"Score: 85 → Grade: B"`  

// **Challenge:** Add a condition for perfect scores (100) that returns `"Outstanding! Grade: A+"`

function getGrade(score){
    if (score == 100){
        return `score: ${score} Outstanding Grade: A+!`;
    }else if (score >=90 && score<= 99){
       return `score: ${score}->A good boy`;
    }
    else if (score>=80 && score <=89){
        return `score: ${score}-> B You try`;
    }
    else if (score >=70 && score <= 79){
         return` Score: ${score}->C hnmmm no comment` ;
    }
    else if (score >= 60 && score <= 69){
        return `Score:${score}-> D`;

    }
    else if (score >= 50 && score <=59){
        return ` Score: ${score} -> F What is this?`
    }
     
    console.log(getGrade(56))


}

// ## 🎯 Practice Exercise 2

// **Task:** Discount Calculator  

// **Requirements:**  
// 1. Write a function `calculatePrice(price, customerType, isFirstPurchase)`  
// 2. Apply discounts:  
//    - Student → 10%  
//    - Senior → 15%  
//    - Employee → 20%  
// 3. If `isFirstPurchase` is true, add an extra 5% discount  
// 4. Return the final price (rounded to 2 decimals)  

// **Challenge:** Print a full receipt showing original price, discount percent, and final price.
// // 

// function calculatePrice(){
//     const price = prompt("Enter price:")
//     const customerType= prompt(
//         "Enter customer type (student, senior, employee"
//     )
   
   
    function calculatePrice(price, customerType, isFirstPurchase){
    let discount = 0;
    
    if (customerType === "student"){
        discount = 0.10;
    } else if (customerType=== "senior"){
        discount =0.15;
    } else if (customerType=== "employee"){
        discount = 0.20
    }
    if (isFirstPurchase){
        discount += 0.05;
    }
    let finalprice = price * (1-discount)
    return{
        originalPrice: price,
        discountPercent: discount*100,
        finalPrice: finalprice.toFixed(2)
    };
    
}


 let result = calculatePrice(25, "employee", true);
 console.log("Price caculation:");
 console.log(`Original: ${result.originalPrice}`);
 console.log(`Discount: ${result.originalPrice}%`);
 console.log(`Final price: ${result.finalPrice}`);


// //  # 🎯 Practice Exercise 3

// **Task:** Weather Advisor  

// **Requirements:**  
// 1. Write a function `weatherAdvice(temperature, isRaining)`  
// 2. Use if/else if to return advice:  
//    - < 32 and raining → "Freezing rain! Stay inside!"  
//    - < 32 → "Very cold, wear a heavy coat."  
//    - 32–60 → "Chilly, bring a jacket."  
//    - 60–80 → "Nice weather!"  
//    - `>` 80 → "It's hot, stay hydrated!"  
// 3. Return the advice as a string  

// **Challenge:** Add a ternary operator for quick advice like:  
//    `"Bring an umbrella"` if raining, otherwise `"No umbrella needed"`.

// function weatherAdvice( temperature, isRaining){

// }
function weatherAdvice() {
    let temperature = prompt("What is the temperature:")
    let isRaining = prompt("Is it raining:")

    console.log("Temperature:", temperature)
    console.log("Is it raining?", isRaining)

    if (temperature < 32 && isRaining) {
        console.log("Freezing rain! Stay inside!")
    } else if (temperature < 32) {
        console.log("Very cold, wear a heavy coat.")
    } else if (temperature >= 32 && temperature <= 60) {
        console.log("Chilly, bring a jacket.")
    } else if (temperature >= 60 && temperature <= 80) {
        console.log("Nice weather!")
    } else {
        console.log("It's hot, stay hydrated!")
    }

    let advice = isRaining ? "Bring an umbrella, if its raining." : "No umbrella needed if its not raining.";
    console.log(advice);

    console.log("")  
}

// // Task 4
// ## 🎯 Practice Exercise 4

// **Task:** ATM Simulation  

// **Requirements:**  
// 1. Create a function `atm(balance, action, amount)`  
// 2. If action is `"withdraw"`, check if balance is enough:  
//    - If yes, subtract amount and return new balance  
//    - If no, return `"Insufficient funds"`  
// 3. If action is `"deposit"`, add amount to balance and return new balance  
// 4. Use clear messages in template literals  

// // **Challenge:** Add a condition that blocks withdrawals over 500 at once.

let balance = 30000
function atm(balance, action, amount) {
    if (action === "withdraw" ) {
        if (amount > 5000) {
            return "Maximum withdraw is 5000"
        }else if (balance >= amount) {
            balance -+ amount;
            return `Withdrawal Successful. New balance: $${balance}`;
        } else {
            return `Insufficient funds. Your balance is $${balance}`;
        }
    } else if (action === "deposit") {
        balance += amount;
        return `Deposit Successful. New balance: $${balance}`;
    } else {
        return "unknow application, use 'withdraw' or 'deposit'";
    }
}
console.log(atm(balance, "withdraw", 5000))

// Task 5

function personalAssistant(time, weather, daytype) {
    let message = daytype === "workday" ? "Prepare your mind for work!" :
                  daytype === "weekend" ? "Enjoy some rest, it's the weekend!" :
                  daytype === "holiday" ? "Enjoy your Holiday!" : "Invalid day selection"
    message += (weather === "sunny") ? "Remember to take sun protection if you are going out." :
               (weather === "rainy") ? "Keep an umbrella handy." :
               (weather === "cloudy") ? "Seem like a calm day ahead." : "Unknown weather status."
    if (time < 12 && time >=0) {
        message += "Wishing you a wonderful morning!";
    } else if (time >= 12 && time < 18) {
        message += "Wishing you a successful afternoon";
    } else if (time >=18 && time <= 23) {
        message += "Settle in for the evening";
    } else{
        message += "Unrecognized time format.";
    }
    console.log(message);
}