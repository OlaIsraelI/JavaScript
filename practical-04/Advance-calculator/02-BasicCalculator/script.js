const display = document.getElementsByClassName("display")[0]; // Access the first (and only) display element

function appendToDisplay(input) {
  display.value += input; // Append the input to the display value
}

function clearDisplay() {
  display.value = ""; // Clear the entire display
}

function deleteLastChar() {
  display.value = display.value.slice(0, -1); // Remove the last character from the display
}

function calculate() {
  try {
    // Evaluate the expression safely
    display.value = eval(display.value) || "";
  } catch (error) {
    display.value = "error..."; // Display error message if the expression is invalid
  }
}
