// function firstNonRepeatedChar(str) {
//  // Write your code here
// }
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 

function firstNonRepeatedChar(str) {
  // Create a map to store character frequencies
  const charFrequency = {};

  // Step 1: Count the occurrences of each character
  for (let char of str) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  // Step 2: Find the first character with a frequency of 1
  for (let char of str) {
    if (charFrequency[char] === 1) {
      return char; // Return the first non-repeated character
    }
  }

  // If no non-repeated character is found, return null
  return null;
}

const input = prompt("Enter a string"); // Take input from the user
alert(firstNonRepeatedChar(input)); // Display the result

