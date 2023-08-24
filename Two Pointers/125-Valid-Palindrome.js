/**
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = function(s) {
  let cleansStr = cleanUP(s);
  return isPal(cleansStr);
};


function cleanUP(str){
  let char = "abcdefghijklmnopqrstuvwxyz0123456789";

  let newS = "";

  for (let i = 0; i < str.length; i++) {
    let lCase = str[i].toLowerCase();

    if(char.indexOf(lCase) !== -1){
      newS += lCase;
    }
  }
    return newS;
}

function isPal(str) {
  let left = 0;
  let right = str.length -1;
  
  while (left < right){
    if(str[left] != str[right]){
      return false;
    }
    left ++;
    right --;
  }
  return true;
}


//Time  and space Complexity = o(n)