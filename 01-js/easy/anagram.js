/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


function isAnagram(str1, str2) {

  // Convert the string in lower case.
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  let map_a = {}
  
  // If the lenght of both string are not equal then.
  if (str1.length != str2.length) {
    return false
  }
  for(let i=0 ; i < str1.length ; i++){
      map_a[str1[i]] = (map_a[str1[i]] || 0) + 1
  }

  console.log(map_a) ;

  for(let alpha of str2) {
    if (!map_a[alpha]) {
        return false
    }
    map_a[alpha] -= 1
  }
  return true
}

module.exports = isAnagram;
// str1 = "spar"
// str2 = "rasp"
// isAnagram(str1, str2)
