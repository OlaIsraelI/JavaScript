function ticketPrice(age) {
  if (age <= 12) {
      return "Ticket Price: $10 (Child)";
  } else if (age >= 13 && age <= 17) {
      return "Ticket Price: $15 (Teenager)";
  } else {
      return "Ticket Price: $20 (Adult)";
  }
}

// Example usage
console.log(ticketPrice(10)); // Output: Ticket Price: $10 (Child)
console.log(ticketPrice(15)); // Output: Ticket Price: $15 (Teenager)
console.log(ticketPrice(25)); // Output: Ticket Price: $20 (Adult)
