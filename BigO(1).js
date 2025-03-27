const numbers = [1, 2, 3, 4, 5];

//O(1) because the time it takes to run the function is constant
//no matter the size of the input
const getElement = (arr, index) => arr[index];

console.log(getElement(numbers, 0)); // 1