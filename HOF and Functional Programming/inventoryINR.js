// 3. Build a feature for Store's Inventory.

// Original inventory with prices in USD
const inventory = {
    "apple": 1.99,
    "banana": 0.99,
    "orange": 1.49,
    "grapes": 2.99
  };
  
  // Function to convert prices from USD to INR
  function convertToINR(priceUSD) {
    const exchangeRate = 80;
    return priceUSD * exchangeRate;
  }
  
  // Convert prices using map function
  const inventoryINR = Object.fromEntries(
    Object.entries(inventory).map(([item, priceUSD]) => [item, convertToINR(priceUSD)])
  );
  
  // Output the converted inventory
  console.log("Inventory in INR:", inventoryINR);
  