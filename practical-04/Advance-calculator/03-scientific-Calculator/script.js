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
    // Handling equal button to evaluate the expression
    else if (btnText === '=') {
      try {
        // Evaluate the expression using eval()
        screen.value = eval(screen.value.replace('^', '**')); // replacing ^ with ** for exponentiation
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
    // Handling other buttons (numbers, operators, and exponent)
    else {
      screen.value += btnText;
    }
  });
});
