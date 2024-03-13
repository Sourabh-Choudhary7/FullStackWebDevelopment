// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.

// Sample list of books with their authors and publication years
const books = [
    { title: "Book 1", author: "author 1", year: 2001 },
    { title: "Book 2", author: "author 2", year: 2012 },
    { title: "Book 3", author: "author 3", year: 2009 },
    { title: "Book 4", author: "author 4", year: 2015 },
    { title: "Book 5", author: "author 5", year: 2024 },
  ];
  
  // Function to filter books published after 2010 and capitalize author names
  function filterAndCapitalize(books) {
    return books
      .filter(book => book.year > 2010) // Filter books published after 2010
      .map(book => ({
        title: book.title,
        author: book.author.toUpperCase(), // Capitalized author names
        year: book.year
      }));
  }
  
  // Filter and capitalize books
  const filteredBooks = filterAndCapitalize(books);
  
  // Output the filtered and capitalized books
  console.log("Filtered and Capitalized Books:", filteredBooks);
  