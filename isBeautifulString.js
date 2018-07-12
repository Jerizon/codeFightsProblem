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