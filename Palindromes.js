function palindrome(str) {
 let str2 = str.split('').reverse().join('');
 return str === str2;
}

let str = 'Hello';
console.log(palindrome(str));