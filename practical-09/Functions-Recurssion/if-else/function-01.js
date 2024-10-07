function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return `${year} is a leap year.`;
  } else {
      return `${year} is not a leap year.`;
  }
}

// Example usage
console.log(isLeapYear(2024)); // Output: 2024 is a leap year.
console.log(isLeapYear(1900)); // Output: 1900 is not a leap year.
console.log(isLeapYear(2000)); // Output: 2000 is a leap year.
