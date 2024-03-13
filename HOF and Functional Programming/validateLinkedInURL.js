// 6. LinkedIn Profile URL Validator.

function validateLinkedInURL(url) {
  // Regular expression for matching valid LinkedIn profile URLs
  const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

  // Test if the input URL matches the regex pattern
  if (regex.test(url)) {
    console.log("The LinkedIn profile URL is valid.");
  } else {
    console.log("The LinkedIn profile URL is not valid.");
  }
}

// Test the function with some example URLs
validateLinkedInURL("https://www.linkedin.com/in/hiteshchoudhary");
validateLinkedInURL("https://www.linkedin.com/in/singhsanket143");
validateLinkedInURL("https://www.linkedin.com/in/user_name_1234");
validateLinkedInURL("https://www.linkedin.com/in/long_username_with_hyphens_or_underscores_12345");
validateLinkedInURL("https://www.linkedin.com/in/short");
validateLinkedInURL("https://www.linkedin.com/in/invalid@username");
validateLinkedInURL("http://www.linkedin.com/in/johndoe"); // Should not match because it starts with http://
validateLinkedInURL("https://www.linkedin.com/profile/view?id=123456"); // Should not match because of additional parameters
validateLinkedInURL("https://in.linkedin.com/in/hiteshchoudhary");
