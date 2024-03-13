// 5. URL validation.

function validateURL(url) {
    // Regular expression for matching valid URLs
    const regex = /^(http|https):\/\/[\w\d\S]+?\.[\w]+$/;
  
    // Test if the input URL matches the regex pattern
    if (regex.test(url)) {
      console.log("The URL is valid.");
    } else {
      console.log("The URL is not valid.");
    }
  }
  
  // Test the function with some example URLs
  validateURL("https://pwskills.com");
  validateURL("https://in.linkedin.com");
  validateURL("https://github.com");
  validateURL("https://www.example.com/path");
  validateURL("https://github.com/");
  