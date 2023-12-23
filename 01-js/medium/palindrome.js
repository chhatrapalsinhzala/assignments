/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  // Now converting a string into the lowercase string
  let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  for (let i = 0 ; i < Math.floor(cleanedStr.length / 2) ; i++) {
    if (cleanedStr[i] !== cleanedStr[cleanedStr.length - i - 1]) {
        return false ;
    } 
  }
  
  return true;
}


// function isPalindrome(str) {

//   // Now converting a string into the lowercase string
//   str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  
//   return str == str.split("").reverse().join("");
// }


module.exports = isPalindrome;
// str = 'Able, was I ere I saw Elba!'
str = 'hello'
is_pd = isPalindrome(str)
console.log(is_pd)
