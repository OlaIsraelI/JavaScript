// Task One

// Selecting Elements:
// const display = document.getElementById('display');: This selects the input field where the calculator's output is displayed.
// const buttons = document.querySelectorAll('input[type="button"]');: This selects all buttons of the type "button" to add click events to them.
// Flag to track if a calculation has been completed
// let calculationDone = false;


// Select the display input field where numbers and results are shown
const display = document.getElementById('display');

// Select all the buttons with the class 'btn' for handling their click events
const buttons = document.querySelectorAll('input[type="button"]');

// Flag to track if a calculation has been completed
let calculationDone = false;

//Task Two

// Adding Event Listeners:
// buttons.forEach(button => { ... });: This loop attaches an event listener to each button.
// Event Handling:
// const action = button.getAttribute('data-action');: Retrieves the action type (e.g., clear, delete, calculate) if present.
// const value = button.getAttribute('data-value');: Retrieves the numerical or operator value of the button.

// Add event listeners to each button
buttons.forEach(button => {
button.addEventListener('click', (e) => {
// Get the button's value or action type
const action = button.getAttribute('data-action');
const value = button.getAttribute('data-value');



//Task Three
// Clearing the Display: Using IF..Else IF Statement or Condition

//1. if (action === 'clear') { display.value = ''; }: 
//Clears the display if the "AC" button is clicked.
// Deleting Last Character:

//2. else if (action === 'delete') { display.value = display.value.toString().slice(0, -1); }: 
//Deletes the last character if the "DE" button is clicked.


//3. Calculating the Expression:
// else if (action === 'calculate') { ... }: Evaluates the mathematical expression on the display using eval(). If there’s an error, it shows "Error".



    // Handling clear button ('AC')
    if (action === 'clear') {
      display.value = ''; // Clears the display
      calculationDone = false; // Reset the calculation done flag
    } 
    // Handling delete button ('DE')
    else if (action === 'delete') {
      display.value = display.value.toString().slice(0, -1); // Removes the last character
    } 
    // Handling equal button ('=')
    else if (action === 'calculate') {
      try {
        display.value = eval(display.value); // Evaluates the mathematical expression in the display
        calculationDone = true; // Set the flag to true since the calculation is done
      } catch {
        display.value = 'Error'; // Shows error if the input is invalid
      }
    } 
    // Handling all other buttons (numbers, operators)
    else if (value) {
    //Clear the display if a new number or operator is entered after a calculation
            if (calculationDone) {
              display.value = ''; // Clear the display
              calculationDone = false; // Reset the flag
            }
      display.value += value; // Appends the button value to the display
    }
  });
});















// Key Changes Explained:
// Flag (calculationDone): This boolean variable is used to track if a calculation has just been performed.

// Reset the Display After Calculation:

// When a number or operator button is clicked, the code checks if calculationDone is true.
// If it is, the display is cleared (display.value = ''), and calculationDone is set back to false so that the user can start a new input sequence cleanly.
// Handling Calculation with =:

// When the = button is pressed, the flag calculationDone is set to true, indicating the calculation has been completed.


