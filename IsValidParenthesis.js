const isValidParenthesis = (str) => {
  const stack = [];
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for(let char of str){
    if(brackets[char]){
      stack.push(char);
    }else{
      const last = stack.pop();
      if(char !== brackets[last]){
        return false;
      }
    }
  }
  
  return stack.length === 0;

}

console.log(isValidParenthesis('()'));
console.log(isValidParenthesis('()[]{}'));
console.log(isValidParenthesis('(]'));
console.log(isValidParenthesis('([)]'));