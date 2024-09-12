

//1. Function Phone Number
// function formatPhoneNumber(numbers){
//   if(!Array.isArray(numbers) || numbers.length !== 10 || !numbers.every(num => Number.isInteger(num) && num >= 0 && num <= 9)){
//     throw new Error('Input must be an array of 10 integers between 0 and 9.');
//   }

//   const[n1, n2, n3, n4, n5, n6, n7, n8, n9, n10] = numbers;

//   return `(${n1}${n2}${n3}) ${n4}${n5}${n6}-${n7}${n8}${n9}${n10}`;
// }

// const phoneNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(formatPhoneNumber(phoneNumberArray));




//2. Function Capitalize each word

function jadenCase(sentence){
  if(typeof sentence !== 'string'){
    throw new Error('Input must be a string.');
  }

  const words = sentence.split(' ');
  const jadenWords = words.map(word => {
    if (word.includes(" ' ")){
      return word.split(" ' ").map(part => part.charAt(0).toUpperCase() + part.slice(1).join(" ' "));
    }else{
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  });

  return jadenWords.join(' ');
}

const sentence = "I'm the king of the world and I don't care.";
const jadenWord = jadenCase(sentence);

console.log(jadenWord);