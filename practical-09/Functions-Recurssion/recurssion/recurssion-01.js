function power(base, exponent) {
  // Base case
  if (exponent === 0) {
      return 1; // Any number raised to the power of 0 is 1
  } else if (exponent < 0) {
      return 1 / power(base, -exponent); // Handle negative exponents
  } else {
      return base * power(base, exponent - 1); // Recursive case
  }
}

// Example usage
console.log(power(2, 3)); // Output: 8
console.log(power(5, 0)); // Output: 1
console.log(power(2, -2)); // Output: 0.25
