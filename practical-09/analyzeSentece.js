function analyzeSentence(sentence) {
  let length = 0;
  let wordCount = 0;
  let vowelCount = 0;

  const vowels = 'aeiouAEIOU';

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    if (char !== '.') {
      length++; // Increase length for each non-period character

      if (vowels.includes(char)) {
        vowelCount++; // Count vowels
      }

      // Count words: A word is identified by a space followed by a non-space and non-period character
      if (char === ' ' && sentence[i + 1] !== ' ' && sentence[i + 1] !== '.') {
        wordCount++;
      }
    }
  }

  // Include the first word in the count, as the loop only increments on spaces
  if (sentence.length > 1 && sentence[0] !== ' ') {
    wordCount++;
  }

  console.log("Length of the sentence (excluding period):", length);
  console.log("Number of words:", wordCount);
  console.log("Number of vowels:", vowelCount);
}

// Example usage
let sentence = "This is a test sentence.";
analyzeSentence(sentence);
