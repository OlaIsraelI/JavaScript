let screen = document.querySelector('#screen');
let buttons = document.querySelectorAll('.btn');

// Adding event listeners to each button
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let btnText = e.target.innerText;

    // Handling clear button
    if (btnText === 'AC') {
      screen.value = '';
    } 
        // Handling delete button ('DE')
        else if (btnText === 'CE') {
          display.value = display.value.toString().slice(0, -1); // Removes the last character
        } 
    // Handling factorial operation
    else if (btnText === 'x!') {
      screen.value = factorial(parseInt(screen.value)).toString();
    } 
    // Handling equal button to evaluate the expression
    else if (btnText === '=') {
      try {
        // Replacing ^ with ** for exponentiation and evaluating the expression
        let expression = screen.value.replace('^', '**')
                                     .replace(/π/g, Math.PI)
                                     .replace(/e/g, Math.E);
        screen.value = eval(expression);
      } catch {
        screen.value = 'Error'; // Display error for invalid input
      }
    } 
    // Handling square root operation
    else if (btnText === 'root') {
      screen.value = Math.sqrt(parseFloat(screen.value)).toString();
    } 
    // Handling trigonometric functions
    else if (btnText === 'sin') {
      screen.value = Math.sin((parseFloat(screen.value) * Math.PI) / 180).toString();
    } 
    else if (btnText === 'cos') {
      screen.value = Math.cos((parseFloat(screen.value) * Math.PI) / 180).toString();
    } 
    else if (btnText === 'tan') {
      screen.value = Math.tan((parseFloat(screen.value) * Math.PI) / 180).toString();
    } 
    // Prevent multiple consecutive operators
    else if (/[\+\-\*\/]$/.test(screen.value) && /[\+\-\*\/]/.test(btnText)) {
      return; // Ignore if the last character is already an operator
    } 
    // Handling other buttons (numbers, operators, and exponent)
    else {
      screen.value += btnText;
    }
  });
});

// Function to calculate factorial
function factorial(n) {
  if (n < 0) return 'Error'; // Factorial of negative numbers is not defined
  return n === 0 ? 1 : n * factorial(n - 1);
}
