function isPalindrome(str) {
  // Preprocess the string: remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Recursive helper function
  function checkPalindrome(s, left, right) {
      if (left >= right) {
          return true; // Base case: all characters checked
      }
      if (s[left] !== s[right]) {
          return false; // Characters don't match
      }
      return checkPalindrome(s, left + 1, right - 1); // Recur with the next set of characters
  }

  return checkPalindrome(str, 0, str.length - 1);
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("hello")); // Output: false
