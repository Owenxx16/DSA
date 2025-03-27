const text = "Hello my name name name is Owen";
//{hello: 1, my: 1, name: 3, is: 1, owen: 1}

function wordCounter(text){
  const lowerText = text.toLowerCase();

  const wordMap = {};

  const words = lowerText.split(/\s+/);
  
  for(let word of words){
    if(word in wordMap){
      wordMap[word]++;
    } else {
      wordMap[word] = 1;
    }
  }
  return wordMap;
}

console.log(wordCounter(text));
