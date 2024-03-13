// 06. Nested Objects.

// Write a function that takes an object representing a person as input and extracts the name and street properties from a nested object using object destructuring. The function should return an object with these two properties. A sample object is given below.

const person = {
    name: "Sourabh",
    age: 21,
    address: {
      street: "450 Main St",
      city: "5ector 5, Kolkata",
      state: "West Bengal",
    },
  };
  
  function extractData(obj) {
    const {
      name,
      address: { street },
    } = obj;
    return { name, street };
  }
  
  console.log(extractData(person));
  
  