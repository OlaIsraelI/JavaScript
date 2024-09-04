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
  // console.log (`Your Grade is: ${grade}`);
  // console.log(response);

  //Display the Grade and Response on the WebPage using Class Names
  const gradeDisplay = document.getElementsByClassName("grade-display")[0];
  const responseDisplay = document.getElementsByClassName("response-display")[0];

  //Set the text content of the Elements
gradeDisplay.textContent = `Your Grade is: ${grade}`;
responseDisplay.textContent = response;
}


//Example Usage
// computeGrade();

