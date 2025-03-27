function intReversal(str){
  let str2 = str.toString().split('').reverse().join('');
  let str3 = parseInt(str2) * Math.sign(str);
  return str3;
}

let str = 12345;
console.log(intReversal(str));