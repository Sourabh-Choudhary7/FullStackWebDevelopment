// 2. Random Number Generator with Delay and Progress Indication:

function generateRandomNumberWithDelay(delayInSeconds) {
    let remainingTime = delayInSeconds;
    
    // Countdown function to display remaining time
    const countdown = setInterval(() => {
      console.log(`${remainingTime} seconds remaining until the random number is generated.`);
      remainingTime--;
      
      if (remainingTime <= 0) {
        clearInterval(countdown); // Stop countdown when time is up
        const randomNumber = Math.floor(Math.random() * 100); // Generate random number between 0 and 99
        console.log("Random number generated:", randomNumber);
      }
    }, 1000); // Update countdown every second
  }
  
  const delayInSeconds = 3; // Change this value to modify delay
  generateRandomNumberWithDelay(delayInSeconds);
  