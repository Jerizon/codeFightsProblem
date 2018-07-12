// A string is said to be beautiful if b occurs in it no more times than a; c occurs in it no more times than b; etc.

// Given a string, check whether it is beautiful.

// Example

// For inputString = "bbbaacdafe", the output should be
// isBeautifulString(inputString) = true;
// For inputString = "aabbb", the output should be
// isBeautifulString(inputString) = false;
// For inputString = "bbc", the output should be
// isBeautifulString(inputString) = false.

function isBeautifulString(inputString) {
  var alphabet = {};
  for(let char of inputString){
      alphabet[char] = alphabet[char] + 1 || 1;
  }
  
  for(var i = 97; i < 122; i++){        
      if(alphabet[String.fromCharCode(i)] < (alphabet[String.fromCharCode(i + 1)])) {
          return false;
      } else if (!alphabet[String.fromCharCode(i)] && alphabet[String.fromCharCode(i+1)] > 0) {
      return false;
      }
  }
  return true;
}