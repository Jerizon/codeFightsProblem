// Given a string, find the shortest possible string which can be achieved by adding characters to 
// the end of initial string to make it a palindrome.

function buildPalindrome(st) {
  function isPalindrome(str){
      return str === str.split('').reverse().join('');
  }
  
  var palindromeEnd = '';
  
  for(var char of st){
      if(isPalindrome(st + palindromeEnd)) break;
      palindromeEnd = char + palindromeEnd;
  }
  return st + palindromeEnd;
}