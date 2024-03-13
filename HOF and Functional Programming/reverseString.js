// 1. Reverse String.

// Define the input string
const input = "Hello, world!";

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Function to reverse the string after a delay of 2 seconds
function reverseAfterDelay(inputString) {
  setTimeout(() => {
    const reversedString = reverseString(inputString);
    console.log("Reversed string:", reversedString);
  }, 2000);
}

reverseAfterDelay(input);
