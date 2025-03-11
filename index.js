function isPalindrome(word) {
  // Write your algorithm here

  //Forms the reversed word
  let reversedWord = ""
  let currentArrayPosition = word.length - 1
  while (currentArrayPosition >= 0){
    let currentLetter = word[currentArrayPosition]
    reversedWord = reversedWord + currentLetter
    currentArrayPosition--
  }

  if (reversedWord === word){
    return true
  }else{
    return false
  }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here

  //First, a while loop is used to create a reversed version of the provided word,
  which is assigned as a value to the reversedWord variable. Once all of that is done,
  the values of word and reversedWord are compared. If they are the same, the code
  returns true. If not, the code returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("noon"))

  console.log("Expecting: false")
  console.log("=>", isPalindrome("orange"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
