/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1 = str.replace(/[,.!?\s]/g, "");
  let s=str1.length;
  if(s === 0 ) return true;

  for(let i=0;i<=s/2;i++){
    if(str1[i].toLowerCase() !=str1[s-i-1].toLowerCase()) return false;
  }
  return true;
}

module.exports = isPalindrome;
