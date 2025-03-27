// function sentenceCapitaliztion(str){
//   let words = [];
//   for (let word of str.split(' ')){
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(' ');
// }

//Another way
function sentenceCapitalization(str){
  let str1 = str.toLowerCase().split(' ');
  return str1.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

let str = 'hello world';
console.log(sentenceCapitaliztion(str));