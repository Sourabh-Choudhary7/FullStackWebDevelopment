// 1. Count the occurrences.
// You are building a word count generator that will take a large string of text as input and output the words and the number of times they are present in the string. Your task is to write a function that can count the occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can assume that the string only contains alphabetic characters and spaces.

function countOccurrences(text) {
    const words = text.split(/\s+/);
    const wordCounts = new Map();
  
    // Iterate over each word
    for (const word of words) {
      if (wordCounts.has(word)) {
        wordCounts.set(word, wordCounts.get(word) + 1);
      } else {
        wordCounts.set(word, 1);
      }
    }
  
    return wordCounts;
  }
  
  const text = "This is a sample text. This text contains words, and it repeats some words.";
  const wordCounts = countOccurrences(text);
  
  // Output the word counts
  console.log("Word Counts:", wordCounts);
  