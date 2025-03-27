const groceries = ['milk', 'eggs', 'bread', 'butter', 'cheese'];

// this is O(n) because the time it takes to run the function is directly proportional to the size of the input
// if the input is 5, it will take 5 iterations to find the item
const searchForItem = (item) => {
  for(let i = 0; i < groceries.length; i++) {
    if(groceries[i] === item) {
      return `Item found at index ${i}`;
    }
  }

  for(let j = 0; j < groceries.length; j++) {
    if(groceries[j] === item) {
      return `Item found at index ${i}`;
    }
  }

  // n + n = 2n
  // O(2n) remove the constant => O(n)


}