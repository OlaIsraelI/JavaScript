//STRING MANIPULATION FUNCTIONS

//1. Reversing a String using JavaScript


//Define a function reverseString whichholds the argument 'string'.
function reverseString (string){

//return the string such that sentence is read in reverse.
  return string.split('').reverse().join('');
}

//Display the result of the function
console.log(reverseString ("Hello"));


//2. A Function that counts the number of characters in a string.

//This function 'counCharacters' contains an argument 'string' that returns the length of string when displayed.

function countCharacters(string){
  return string.length;
}


//The length of the string 'Hello World' is displayed on the console.
console.log(countCharacters("Hello World"));


//3. The Function below capitalizes the first letter of each word in a sentence.

function capitalizeWords(sentence){
  return sentence
  .split(' ') //Split senctences into words.
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' '); //Join words back into a sentence.
}

console.log(capitalizeWords("welcome to class. today is a good day"));



//ARRAY FUNCTIONS

//4. The Array function below finds the maximum value in an array of numbers.

function findMaximum(arr){
  return Math.max(...arr);
}
console.log(findMaximum([1,2,3,4,5]));


//The Array function below finds the Minimum value in an array of numbers.

function findMinimum(arr){
  return Math.min(...arr);
}
console.log(findMinimum([8,5,4,2,0,1,9,7,6,3]));


//5. The function below calculates the sum of all elements in an Array.

function sumArray(arr){
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1,2,3,4,5,6,7,8,9,0]));


//6. This function below will filter out a number in a list of Array.

function filterArray(arr, condition){
  return arr.filter(condition);
}

console.log(filterArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], num => num % 2 !== 0));

//MATHEMATICAL FUNCTION

//7. The function Below is written to calculate the Factorial of a Given Number.

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n -1);
}

console.log(factorial(5));


//8. The function below checks an array of numbers to determine if it's prime.

function isPrime(num){
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++){
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));

//9. The function below generates a Fibonacci sequence up to a given number of terms.

function fibonacci(n){
  let fibSequence = [0, 1];
  for (let i = 2; i < n; i++){
    fibSequence.push(fibSequence[i-1] + fibSequence[i-2]);
  }
  return fibSequence.slice(0, n);
}

console.log(fibonacci(10));


//10. Create a Switch System that will request user to input Grade and give a resonse.

function computeGrade (){

  //Prompt the user to enter their Score.
  let score = prompt("Enter your Score (0-100):");
  score = Number(score); //Convert the input to a number.

  //Check if the score is valid
  if (isNaN(score) || score < 0 || score > 100){
    console.log("Invalid Score. Please Enter a Number Between 0 and 100.");
    return;
  }

  //Determine the Grade using a Switch statement
  let grade;
  let response;

  //Using Math.floor to get integer values for switch cases
  switch (true){
    case score >= 90:
      grade = 'A';
      response = "Excellent! Keep going.";
      break;

    case score >= 80:
      grade = 'B';
      response = "Great Job! You are doing very well, Keep going.";
      break;

    case score >= 70:
      grade = 'C';
      response = "Good Effort! You are making progress, Keep going.";
      break;

    case score >= 60:
      grade = 'D';
      response = "Nice Attempt! Try better next time. Keep going.";
      break;
    
    case score >= 50:
      grade = 'E';
      response = "Good Try! You have work to do. Keep going.";
      break;
    
    default:
      grade = 'F';
      response = "You can do better! Work harder next time. Keep going.";
      break;
  }


  //Display the Grade and Response
  console.log (`Your Grade is: ${grade}`);
  console.log(response);
}

//Example Usage
computeGrade();


