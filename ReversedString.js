// using Stack 
// Time Complexity: O(n)

function reverseString(str) {
  const stack = [];
  
  for(let char of str){
    stack.push(char);
  }

  let reversedString = "";
  while(stack.length > 0){
    reversedString += stack.pop();
  }
  return reversedString;
}

console.log(reverseString('hello'));