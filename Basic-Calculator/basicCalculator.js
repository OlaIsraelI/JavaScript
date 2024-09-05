function calculate(operation){

  //Get Values from user
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;


  //Check if input values are valid numbers
  if (isNaN(num1) || isNaN(num2)){
    document.getElementById("result").textContent = "Please Enter Valid Numbers.";
    returns;
  }


  //Perform calculation based on the selected operation
  switch (operation){
    case 'add':
      result = num1 + num2;
      break;

    case 'subtract':
      result = num1 - num2;
      break;

    case 'multiply':
      result = num1 * num2;
      break;

    case 'divide':

    if (num2 === 0){
      document.getElementById("result").textContent = "Cannot divide by Zero.";
    }
      result = num1 / num2;

      break;

    case 'modulus':
      result = num1 % num2;
      break;
    
    default:
      result = "Invalid Operations.";
  }


  //Display the Result
  document.getElementById("result").textContent = `result: ${result}`;
}