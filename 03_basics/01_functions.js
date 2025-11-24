// function addTwoNumber(number1, number2){
//     console.log(number1+number2)
    
// }

// addTwoNumber(2,4)



// function addTwoNumber (number1, number2){
//     let result = number1+number2
//     return result
//     console.log("Sumant"); // This line will never execute because after return nothing will execute
    
// }

// const result = addTwoNumber(4,5)
// console.log(result);



// function addTwoNumber (number1, number2){
//     let result = number1+number2
//     return result
//     console.log("Sumant"); // This line will never execute because after return nothing will execute
    
// }

// const result = addTwoNumber(4,5)
// console.log(result);




// function loginUserMessage(userName){
//     if (userName===undefined){
//         console.log("Please Enter a valid user name");
//         return
        
//     }
//     return `${userName} just logged in`
// }

// console.log(loginUserMessage());



function loginUserMessage(userName="Sam"){ //Sam is default value. if user is not passing any argument then sam will be used
    return `${userName} just logged in`
}

console.log(loginUserMessage()); // - o/p -> Sam just logged in
console.log(loginUserMessage("Sumant")); //-o/p -> Sumant just logged in

