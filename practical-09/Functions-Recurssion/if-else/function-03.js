function clothingAdviser(temperature, isRaining) {
  let advice = "";

  if (isRaining) {
      if (temperature < 60) {
          advice = "It's cold and raining. Wear a warm raincoat and waterproof boots.";
      } else {
          advice = "It's warm and raining. A light raincoat will suffice.";
      }
  } else {
      if (temperature < 60) {
          advice = "It's cold and dry. Wear a warm jacket.";
      } else if (temperature >= 60 && temperature < 80) {
          advice = "It's a pleasant day. A light sweater should be enough.";
      } else {
          advice = "It's hot outside. Wear light clothing.";
      }
  }

  return advice;
}

// Example usage
console.log(clothingAdviser(50, true)); // Output: It's cold and raining. Wear a warm raincoat and waterproof boots.
console.log(clothingAdviser(70, false)); // Output: It's a pleasant day. A light sweater should be enough.
