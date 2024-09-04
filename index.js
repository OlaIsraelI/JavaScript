// // How to Declare Varibles in JavaScript
// // Using var

// // var FirstName = "Ola";
// // var SecondName = "Israel";

// // alert(FirstName+" "+SecondName);
// // console.log(FirstName);


// //Using const and let

// // var firstNAme = "Ola";
// // const lastName = "Israel";
// // let age = 90;
// // let isTrue = true;
// // let CGPA = undefined;
// // let soulsWon = null;
// // var firstName = "Kelvin";

// // age - age + Number("4");

// // let action = "Goes to Class Regularly";
// // let fullName = firstNAme + " " + lastName + " " +action; 

// // console.log(fullName)


// //First Student
// let studentOne = {
//     firstName : "Ola",
//     lastNAme : "Israel",
//     age : 70,
//     CGPA : 4.8,
//     isGraduated : true,
// };

// //Second Student
// let studentTwo = {
//     firstName : "Omotayo",
//     lastNAme : "Christiana",
//     age : 64,
//     CGPA : 4.8,
//     isGraduated : true,
// };


// //Third Student
// let studentThree = {
//     firstName : "Elijah",
//     secondNAme : "Israel",
//     age : 39,
//     CGPA : 5.0,
//     isGraduated : true,
// };


// //Fourth Student
// let studentFour = {
//     firstName : "Debby",
//     secondNAme : "Israel",
//     age : 35,
//     CGPA : 4.9,
//     isGraduated : true,
// };

// console.log(studentOne.firstName);

// studentOne.degree ="Bsc. Software Engineering";

// console.log(studentOne);
// //Making a List in an Array

// let students = [{
//     firstName : "Ola",
//     lastNAme : "Israel",
//     age : 70,
//     CGPA : 4.8,
//     isGraduated : true,
// }, {
//     firstName : "Omotayo",
//     lastNAme : "Christiana",
//     age : 64,
//     CGPA : 4.8,
//     isGraduated : true,
// }, {
//     firstName : "Elijah",
//     secondNAme : "Israel",
//     age : 39,
//     CGPA : 5.0,
//     isGraduated : true,
// }, {
//     firstName : "Debby",
//     secondNAme : "Israel",
//     age : 35,
//     CGPA : 4.9,
//     isGraduated : true,
// } ];

// console.log(students);


// let numbers = [1,8,9,11,13,17,19,22,27,29];

// console.log(numbers[4]);
// console.log(numbers.length);


// console.log(students[3]);



//A New Array List to be displayed on the Webpage Using a Loop Function.

//Loop Types: For, While, Do While, For in, FOr out.

// let num = [5, 10, 15, 20, 25, 30, 35, 6, 11, 21, 31, 41, 51, 7, 14, 21, 31, 41, 51, 61];

// const numlist = document.getElementById("num-list");


// let index = 0;


//While Loop
// while (index < num.length){
//         const numLi = document.createElement("li");
//         numLi.textContent = num[index];
    
//         numlist.appendChild(numLi);
//     index += 1;
// }


//For Loop
// for (index = 0; index < num.length; index++){
//     const numLi = document.createElement("li");
//     numLi.textContent = num[index];

//     numlist.appendChild(numLi);
// }

//For of Loop
// for (nu of num){
//     const numLi = document.createElement("li");
//     numLi.textContent = nu;

//     numlist.appendChild(numLi);
// }


//A function
// function addArrayNums(){
//     let total = 0;
//     for (nu of num){
//         total += nu;
//     }

//     const totalHeading = document.getElementsByClassName("total")[0];
    

//     // console.log(totalHeading);
//     // console.log(total);
//     return (totalHeading.textContext = total);
// }

// addArrayNums();

// const addButton = document.getElementById("add-num-btn");

// addButton.addEventListener("click", addArrayNums);


//Write a Function that adds up two numbers

// function addTwoNum(){
//     let total = 3 + 4;

//     return total;
// }

// console.log(addTwoNum());

//Writing a Function with a Parameter

// function addTwoNum (num1, num2){
//     if (typeof num1 !== "number" || typeof num2 !== "number"){

//         return console.log("invalid number");
//     }
//     let total = num1 + num2;
//     return total;
// }

// console.log(addTwoNum(10, 5));


function findPerimeter(length, width) {
    // Correct formula for perimeter: 2 * (length + width)
    let perimeter = 2 * (length + width);
    return perimeter; // Return the calculated perimeter
}

// // Example usage
// const length = 10; // Define the length of the rectangle
// const width = 5; // Define the width of the rectangle
// const rectanglePerimeter = findPerimeter(length, width); // Call the function with the given length and width
// console.log(`The Perimeter of the Rectangle is: ${rectanglePerimeter}`);


// function convertMinutesToSeconds(minutes){
//     const seconds = minutes * 60;
//     return seconds;
// }


// const minutes = 5;
// const seconds = convertMinutesToSeconds(minutes);

// console.log(`${minutes} minutes is equal to ${seconds} seconds.`);


//Function to Check if number is equal to zero

// function isLessThanOrEqualToZero(number){
//     return number <= 0;
// }



// const num1 =-5;
// const num2 = 10;
// const num3 = 0;

// console.log(isLessThanOrEqualToZero(num1));
// console.log(isLessThanOrEqualToZero(num2));
// console.log(isLessThanOrEqualToZero(num3));

//Create a function that takes the age in years and returns the age in days.

// function ageInDays(ageYears){
//     const daysInYear = 365;
//     return ageYears * daysInYear;
// }

// const ageYears = 25;
// const ageDays = ageInDays(ageYears);
// console.log(`Age in days: ${ageDays}`);


//Write a function that returns the string "something" joined with a space " " and the given argument a.

// function joinSomethingWithArg(arg){
//     return `something ${arg}`;
// }

// const result = joinSomethingWithArg("special");
// console.log(result);


//A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

